// ตรวจงาน CP4 (ไม่ต้องแก้ไฟล์นี้)
import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

test('CP4: ใส่ชื่อผู้พัฒนาใน index.html แล้ว', () => {
  const html = readFileSync('index.html', 'utf8')
  const match = html.match(/<p id="developer">\s*ผู้พัฒนา:([^<]*)<\/p>/)

  expect(match, 'ไม่พบบรรทัด <p id="developer">ผู้พัฒนา: ...</p>').not.toBeNull()

  const name = match[1].trim()
  expect(name.includes('...'), 'ยังไม่ได้เปลี่ยน ... เป็นชื่อของตัวเอง').toBe(false)
  expect(name.length, 'ชื่อผู้พัฒนายังว่างอยู่').toBeGreaterThan(1)
})
