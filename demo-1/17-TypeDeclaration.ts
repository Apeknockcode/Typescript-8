/*
    类型声明 

*/
import { camelCase } from 'lodash';

// 类型声明 
declare function camelCase(input: string): string
const res = camelCase("Hello typed ")