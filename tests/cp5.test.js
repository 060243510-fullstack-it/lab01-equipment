// @vitest-environment jsdom
// ตรวจงาน CP5 (ไม่ต้องแก้ไฟล์นี้)
// ใช้ข้อมูลทดสอบที่ต่างจาก data.json เพื่อตรวจว่าโค้ดอ่านข้อมูลจริง ไม่ได้พิมพ์ชื่อลงไปตรงๆ
import { expect, test, vi } from 'vitest'

const testItems = [
  { id: 101, name: 'ลำโพง', available: false },
  { id: 102, name: 'แท็บเล็ต', available: true },
]

test('CP5: แสดงรายการอุปกรณ์พร้อมสถานะใน #equipment-list', async () => {
  document.body.innerHTML =
    '<p id="developer"></p><p id="summary"></p><ul id="equipment-list"></ul>'
  vi.stubGlobal('fetch', async () => new Response(JSON.stringify(testItems)))

  await import('../main.js')

  await vi.waitFor(() => {
    const rows = document.querySelectorAll('#equipment-list li')
    expect(rows.length, 'ยังไม่มี <li> ครบตามจำนวนอุปกรณ์ใน #equipment-list').toBe(
      testItems.length,
    )
  })

  const rows = [...document.querySelectorAll('#equipment-list li')].map((li) => li.textContent)
  expect(rows[0]).toContain('ลำโพง')
  expect(rows[0]).toContain('ถูกยืม')
  expect(rows[1]).toContain('แท็บเล็ต')
  expect(rows[1]).toContain('ว่าง')
})
