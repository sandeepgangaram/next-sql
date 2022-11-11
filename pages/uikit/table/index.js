import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CarService } from '../../../data/service/CarService';
import { Button } from 'primereact/button';
import { CSVLink } from 'react-csv';

const toTitleCase = (str) => str[0].toUpperCase() + str.slice(1);

const Table = forwardRef(({ data }, ref) => {
    const dt = useRef(null);
    const carService = new CarService();
    const [cars, setCars] = useState(data || []);

    useImperativeHandle(ref, () => ({
        fetchData() {
            const x = Math.random() * 100000;
            const result = Array.from({ length: x }).map((_, i) => carService.generateCar(i + 1));
            setCars([...result]);
            return result;
        }
    }));

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(cars);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'query_data');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center export-buttons" style={{ justifyContent: 'flex-end', paddingBottom: '8px' }}>
            <CSVLink data={cars} filename={`data_${new Date().getTime()}.csv`}>
                <Button type="button" icon="pi pi-download" label="csv" className="mr-2" />
            </CSVLink>
            <Button type="button" icon="pi pi-download" label="xls" onClick={exportExcel} className="p-button-success mr-2" />
        </div>
    );

    return (
        <div>
            <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '4px' }}>
                    Total Rows : {cars.length}
                    {header}
                </div>
                {!!cars.length && (
                    <DataTable ref={dt} value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                        {Object.keys(cars[0]).map((item) => (
                            <Column key={item} field={item} header={toTitleCase.bind(null, item)} style={{ minWidth: '100px' }}></Column>
                        ))}
                    </DataTable>
                )}
            </div>
        </div>
    );
});

export default Table;
