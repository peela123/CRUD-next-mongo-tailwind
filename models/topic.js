import mongoose from "mongoose";
import { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title:String,
        description:String
    },
    {
        timestamps:true
    }
)

//if have data model or not have
const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);

export default Topic;