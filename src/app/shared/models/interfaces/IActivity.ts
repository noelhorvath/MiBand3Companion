import { IEntityModel } from './IEntityModel';
import { IDevice } from './IDevice';
import { IMeasurementDate } from './IMeasurementDate';

export interface IActivity extends IEntityModel<IActivity> {
    steps: number;
    distance: number;
    calories: number;
    id?: string;
    device?: IDevice | undefined;
    measurementDate?: IMeasurementDate | undefined;
}
