import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.google.protobuf.DescriptorProto {
  export interface ReservedRange {
    start?: number;
    end?: number;
  }
}
export type Type = $.google.protobuf.DescriptorProto.ReservedRange;

export function getDefaultValue(): $.google.protobuf.DescriptorProto.ReservedRange {
  return {
    start: 0,
    end: 0,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.DescriptorProto.ReservedRange>): $.google.protobuf.DescriptorProto.ReservedRange {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.DescriptorProto.ReservedRange): unknown {
  const result: any = {};
  if (value.start !== undefined) result.start = tsValueToJsonValueFns.int32(value.start);
  if (value.end !== undefined) result.end = tsValueToJsonValueFns.int32(value.end);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.DescriptorProto.ReservedRange {
  const result = getDefaultValue();
  if (value.start !== undefined) result.start = jsonValueToTsValueFns.int32(value.start);
  if (value.end !== undefined) result.end = jsonValueToTsValueFns.int32(value.end);
  return result;
}

export function encodeBinary(value: $.google.protobuf.DescriptorProto.ReservedRange): Uint8Array {
  const result: WireMessage = [];
  if (value.start !== undefined) {
    const tsValue = value.start;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.end !== undefined) {
    const tsValue = value.end;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.DescriptorProto.ReservedRange {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.start = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.end = value;
  }
  return result;
}
