import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type PostSubmitRequest = {
    transaction: string;
    skipPreFlight: boolean;
  }
}
export type Type = $.api.PostSubmitRequest;

export function getDefaultValue(): $.api.PostSubmitRequest {
  return {
    transaction: "",
    skipPreFlight: false,
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitRequest>): $.api.PostSubmitRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitRequest): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = tsValueToJsonValueFns.string(value.transaction);
  if (value.skipPreFlight !== undefined) result.skipPreFlight = tsValueToJsonValueFns.bool(value.skipPreFlight);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitRequest {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = jsonValueToTsValueFns.string(value.transaction);
  if (value.skipPreFlight !== undefined) result.skipPreFlight = jsonValueToTsValueFns.bool(value.skipPreFlight);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.skipPreFlight !== undefined) {
    const tsValue = value.skipPreFlight;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.transaction = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.skipPreFlight = value;
  }
  return result;
}