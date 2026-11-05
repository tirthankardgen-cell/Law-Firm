import { test } from 'node:test';
import assert from 'node:assert/strict';
import { practices, notes, navigation } from '../src/lib/content';
test('all content slugs are unique and safe URL paths',()=>{const slugs=[...navigation.map(x=>x[1]),...practices.map(x=>x[3]),...notes.map(x=>x[3])];assert.equal(new Set(slugs).size,slugs.length);for(const slug of slugs)assert.match(slug,/^[a-z-]+$/)});
test('practice and editorial cards have complete content',()=>{for(const row of [...practices,...notes]){assert.equal(row.length,4);for(const value of row)assert.ok(value.trim())}});
