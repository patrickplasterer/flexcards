import { expect, it, describe } from 'vitest';
import { testInput } from '@/test_examples/testing';

describe('testInput', () => {
    
    it('should always return the input', () => {
        expect(testInput('arg')).toBe('arg');
    });

    it('should always return undefined when using secondarg', () => {
        expect(testInput('secondarg')).toBe(undefined);
    })
    
    
});

