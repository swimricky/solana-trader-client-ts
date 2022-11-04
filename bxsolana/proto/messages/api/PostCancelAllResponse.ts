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
  export type PostCancelAllResponse = {
    transactions: string[];
  }
}
export type Type = $.api.PostCancelAllResponse;

export function getDefaultValue(): $.api.PostCancelAllResponse {
  return {
    transactions: [],
  };
}

export function createValue(partialValue: Partial<$.api.PostCancelAllResponse>): $.api.PostCancelAllResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostCancelAllResponse): unknown {
  const result: any = {};
  result.transactions = value.transactions.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.PostCancelAllResponse {
  const result = getDefaultValue();
  result.transactions = value.transactions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.PostCancelAllResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.transactions) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostCancelAllResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
  }
  return result;
}