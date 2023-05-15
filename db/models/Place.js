import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema(
  {
    name: String,
    location: String,
    image: String,
    mapURL: String,
    description: String,
    visitors: { type: [Schema.Types.ObjectId], ref: "User" },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

placeSchema.virtual("visitorsCount").get(function () {
  return this.visitors.length;
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
