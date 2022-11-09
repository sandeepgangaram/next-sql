import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CarService } from '../../../demo/service/CarService';
import { Button } from 'primereact/button';
import ReactTooltip from 'react-tooltip';

const DataTableVirtualScrollDemo = forwardRef(({ data }, ref) => {
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

    const exportCSV = () => {
        dt.current.exportCSV({});
    };

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
            <div data-for="save-csv" data-tip="Download as CSV">
                <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" />
            </div>
            <ReactTooltip id="save-csv" />
            <div data-for="save-excel" data-tip="Download as Excel Worksheet">
                <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" />
            </div>
            <ReactTooltip id="save-excel" />
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
                        {/* {cars.map((item) => (
                        <Column key={item.id} field={item.id} header={item.id} style={{ minWidth: '200px' }}></Column>
                    ))} */}
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                )}
            </div>
        </div>
    );
});

export default DataTableVirtualScrollDemo;
