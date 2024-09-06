import { Document, model, models, Schema } from 'mongoose'

export interface IEvent extends Document {
    _id: string; // from MongoDB
    title: string;
    description?: string;
    location?:  string;
    imageUrl:  string;
    url?:  string;
    price?: string;
    isFree: boolean;
    createdAt:  Date;
    startDateTime:  Date;
    endDateTime:  Date;
    category: { _id: string, name: string };
    organizer: { _id: string, firstName: string, lastName: string };    
}

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location:  { type: String },
    imageUrl:  { type: String, required: true },
    url:  { type: String },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    createdAt:  { type: Date, default: Date.now },
    startDateTime:  { type: Date, default: Date.now },
    endDateTime:  { type: Date, default: Date.now },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema)

export default Event