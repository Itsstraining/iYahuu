import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import mongoose,{Document} from 'mongoose';




export type PostDocument = Post & Document;

@Schema({
    timestamps: true
})
export class Post{
    @Prop({
        required: true,
    })
    title:string;
}
