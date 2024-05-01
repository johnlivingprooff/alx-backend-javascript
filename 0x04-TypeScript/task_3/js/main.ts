/// <reference path="crud.d.ts"/>
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

let row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

let updatedRow: RowElement = {
    ...row,
    age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);