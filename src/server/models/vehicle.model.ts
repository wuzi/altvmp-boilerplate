import alt from 'alt';
import mongoose from 'mongoose';

export interface Vehicle extends mongoose.Document {
  modelId: string;
  entity: alt.Vehicle;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  spawn(): void;
}

export const VehicleSchema = new mongoose.Schema({
  modelId: {
    type: String,
    required: true
  },
  position: {
    x: Number,
    y: Number,
    z: Number,
    required: true,
  },
  rotation: {
    x: Number,
    y: Number,
    z: Number,
    required: true,
  },
}, {
  timestamps: true,
});

VehicleSchema.methods.spawn = function spawn(): void {
  this.entity = new alt.Vehicle(this.modelId, this.position.x, this.position.y, this.position.z, this.rotation.x, this.rotation.y, this.rotation.z);
};

VehicleSchema.pre('save', function (this: Vehicle): void {
  if (this.isNew) {
    this.spawn();
  }
});

VehicleSchema.pre('remove', function (this: Vehicle): void {
  this.entity.destroy();
});

const Vehicle = mongoose.model<Vehicle>('Vehicle', VehicleSchema);
export default Vehicle;
