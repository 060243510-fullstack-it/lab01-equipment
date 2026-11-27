// โหลดข้อมูลอุปกรณ์จาก public/data.json
// CP3: เปิด DevTools แท็บ Network แล้วหา request ของไฟล์นี้
const response = await fetch('/data.json')
const items = await response.json()

document.querySelector('#summary').textContent = `มีอุปกรณ์ ${items.length} รายการ`

// CP5: ให้ AI เขียนโค้ดต่อจากบรรทัดนี้
// แสดงอุปกรณ์แต่ละชิ้นใน <ul id="equipment-list"> พร้อมคำว่า "ว่าง" หรือ "ถูกยืม"
