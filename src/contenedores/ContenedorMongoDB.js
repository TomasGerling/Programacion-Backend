import mongoose from "mongoose";
import _ from 'lodash';
import { isNull } from "lodash";

class ContenedorMongo {
    constructor(model) {
        this.model = model
    }
    async save(obj) {
        const NewObject = await this.model.create(obj)
        return NewObject
    }
    async getAll() {
        const data = await this.model.find()
        return data;
    }
    async getById() {
        const data = await this.model.findById(id);
        if (isNil(data) || isNull(data)) throw new Error('item not found');
        return data
    }
    async upDate(upDate, id) {
        try {
            const dataUpdated = await model.findByIdAndUpdate(id, upDate, {
                new: true
            }); return dataUpdated;
        } catch (err) {
            if (typeof err === 'Document Not Found Error') {
                throw new Error('Item not Founded')
            }
        }
    }
    async delete(id) {
        await this.model.deleteOne({ _id: id })
    }

}

export default ContenedorMongo;