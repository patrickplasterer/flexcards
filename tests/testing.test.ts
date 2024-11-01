import { expect, test } from 'vitest';
import { testInput } from '@/test_examples/testing';

test('Should always return the input', () => {

    expect(testInput('arg')).toBe('arg');

})