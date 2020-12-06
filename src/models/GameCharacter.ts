import * as mongoose from "mongoose";

export interface IGameCharacter extends mongoose.Document{
    name: string,
    level: number,
    healthLevel: number,
    power: number,
    attackSpeed: number,
    ConnectGameCharacterWithUser
    skills: Array,
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
    skills: Array<String>,
    numberOfFights: number,
    wins: number
}

const GameCharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  level: { type: Number, required: true, default: 1 },
  healthLevel: { type: Number, required: true, default: 100 },
  owner: { type: String, required: true, unique: true },
  power: { type: Number, required: true, default: 1 },
  attackSpeed: { type: Number, required: true, default: 1 },
  skills: { type: Array },
  numberOfFights: { type: Number, required: true, default: 0 },
  wins: { type: Number, required: true, default: 0 }
  User: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export const GameCharacter = mongoose.model<IGameCharacter>("GameCharacter", GameCharacterSchema);