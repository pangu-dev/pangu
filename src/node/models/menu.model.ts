import { model, Schema, SchemaTypes } from "mongoose";
import { toJSON, paginate } from "./plugins";
import { BaseTypes } from "@/common/types/base";
import { MenuModel, MenuStaticMethod } from "@/common/types";

const menuSchema = new Schema<MenuModel, MenuStaticMethod>(
  {
    path: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    redirect: {
      type: String,
      trim: true,
    },
    icon: {
      type: String,
      trim: true,
    },
    lock: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: SchemaTypes.ObjectId,
      ref: "Menu",
    },
    createBy: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      // required: true,
    },
    updateBy: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      // required: true,
    },
    isDel: {
      type: Number,
      enum: [BaseTypes.IS_DEL, BaseTypes.NORMAL],
      default: BaseTypes.NORMAL,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
menuSchema.plugin(toJSON);
menuSchema.plugin(paginate);

/**
 * @typedef Menu
 */
export const Menu = model<MenuModel, MenuStaticMethod>("Menu", menuSchema);