import {
  Type as Project,
  name2num,
  num2name,
} from "./Project.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as Long,
} from "../../runtime/Long.js";
import {
  tsValueToWireValueFns,
  unpackFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type GetSwapsStreamRequest = {
    projects: Project[];
    markets: string[];
  }
}
export type Type = $.api.GetSwapsStreamRequest;

export function getDefaultValue(): $.api.GetSwapsStreamRequest {
  return {
    projects: [],
    markets: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetSwapsStreamRequest>): $.api.GetSwapsStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetSwapsStreamRequest): unknown {
  const result: any = {};
  result.projects = value.projects.map(value => tsValueToJsonValueFns.enum(value));
  result.markets = value.markets.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.GetSwapsStreamRequest {
  const result = getDefaultValue();
  result.projects = value.projects?.map((value: any) => jsonValueToTsValueFns.enum(value) as Project) ?? [];
  result.markets = value.markets?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetSwapsStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.projects) {
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.markets) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetSwapsStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues)).map(num => num2name[num as keyof typeof num2name]);
    if (!value.length) break collection;
    result.projects = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.markets = value as any;
  }
  return result;
}