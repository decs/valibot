import { describe, expect, test } from 'vitest';
import { parse } from '../../methods/index.ts';
import { string } from '../string/index.ts';
import { optional } from './optional.ts';

describe('optional', () => {
  test('should pass also undefined', () => {
    const schema = optional(string());
    const input = 'test';
    const output = parse(schema, input);
    expect(output).toBe(input);
    expect(parse(schema, undefined)).toBeUndefined();
    expect(() => parse(schema, 123)).toThrowError();
    expect(() => parse(schema, false)).toThrowError();
    expect(() => parse(schema, null)).toThrowError();
    expect(() => parse(schema, {})).toThrowError();
  });
});
