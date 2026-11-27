# Lab 1: ระบบยืม-คืนอุปกรณ์ v0

ทำหน้าเว็บแสดงรายการอุปกรณ์ให้ยืม แล้วส่งขึ้น GitHub (120 นาที)

## สิ่งที่ต้องมีในเครื่อง

Node.js LTS (24.15 ขึ้นไป แนะนำ 26), Git, VS Code, Antigravity CLI (`agy`) และบัญชี GitHub

## CP0 ตรวจเครื่อง (5 นาที)

```bash
node -v
npm -v
git --version
agy --version
```

ผลที่ควรเห็น: ทุกคำสั่งแสดงเลขรุ่น

## CP1 รับงาน (15 นาที)

1. เปิด repo ต้นแบบ กด **Use this template** แล้วสร้าง repo ของตัวเองแบบ **Public**
2. กดปุ่ม **Code** คัดลอก URL
3. รันคำสั่ง

```bash
git clone <url ของ repo เรา>
cd <ชื่อโฟลเดอร์>
git config user.name "ชื่อ นามสกุล"
git config user.email "อีเมล noreply จาก GitHub"
code .
```

ผลที่ควรเห็น: VS Code เปิดโฟลเดอร์โปรเจกต์

> repo แบบ Public ทุกคนเห็นได้ ห้ามใส่รหัสนักศึกษา รหัสผ่าน หรือ API key

> อีเมลที่ตั้งจะเห็นได้ในประวัติ commit ให้ใช้อีเมล `noreply` ของตัวเอง: GitHub → **Settings** → **Emails** → ติ๊ก **Keep my email addresses private** แล้วคัดลอกอีเมลที่ลงท้าย `@users.noreply.github.com`

## CP2 รันโปรเจกต์ (15 นาที)

```bash
npm install
npm run dev
```

เปิด URL ที่ Terminal แสดง (ปกติคือ <http://localhost:5173>)

ผลที่ควรเห็น: หน้า "ระบบยืม-คืนอุปกรณ์" บอกว่ามีอุปกรณ์ 4 รายการ มีโฟลเดอร์ `node_modules`
และ Terminal พิมพ์ log เช่น `GET /data.json 200`

ลองเปิด `package.json` และ `.gitignore` แล้วตอบตัวเอง: ทำไมไม่ commit `node_modules`

> ปล่อย Terminal นี้รันไว้ แล้วเปิด Terminal ใหม่สำหรับคำสั่งถัดไป

## CP3 นักสืบ DevTools (20 นาที)

1. กด `F12` (Mac: `Cmd+Option+I`) เปิดแท็บ **Network**
2. ติ๊ก **Disable cache** แล้ว reload หน้า
3. กด **Fetch/XHR** แล้วคลิก `data.json`
4. ตอบ Quiz ใน Menti: method, status code, URL และข้อมูลใน Response
5. เทียบกับ log ใน Terminal ว่าเห็น request เดียวกันไหม

## CP4 แก้โค้ดเอง ห้ามใช้ AI (30 นาที)

1. แก้ `index.html` เปลี่ยน `ผู้พัฒนา: ...` เป็นชื่อหรือชื่อเล่นของตัวเอง แล้วบันทึกไฟล์
2. ส่งขึ้น GitHub

```bash
git status
git diff
git add .
git commit -m "feat: เพิ่มชื่อผู้พัฒนาในหน้าแรก"
git push
```

3. แก้สีหัวข้อใน `style.css` แล้ว commit และ push อีกรอบ ใช้ข้อความ `style: ...`
4. รัน `npm test`

ผลที่ควรเห็น: มี commit ของตัวเองอย่างน้อย 2 ครั้งบน GitHub
**test ของ CP4 ผ่าน ส่วน CP5 ยังไม่ผ่าน เป็นเรื่องปกติ** ลองอ่านข้อความ error ว่าขาดอะไร

## CP5 ให้ AI ช่วย (20 นาที)

เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วพิมพ์ `agy` (ครั้งแรกให้ login ด้วยบัญชี Google)

```text
[Persona] คุณเป็น Web developer ที่สอนนักศึกษาปี 2
[Task]    แก้ main.js ให้แสดงอุปกรณ์จาก data.json เป็น list ใน #equipment-list
          แต่ละรายการมีชื่อ และคำว่า "ว่าง" หรือ "ถูกยืม"
[Context] HTML + CSS + JavaScript ล้วน ใช้ Vite
          ห้ามแก้ไฟล์อื่น ห้ามเพิ่ม dependency
[Format]  แสดง diff ก่อนแก้ อธิบายโค้ดทีละบรรทัดเป็นภาษาไทย
          งานเสร็จเมื่อ npm test ผ่าน
```

1. อ่านสิ่งที่ AI จะแก้ก่อนกดอนุญาต
2. รัน `npm test` เอง และดูหน้าเว็บว่าถูกต้องจริง
3. อธิบายโค้ดที่ได้ให้เพื่อนข้างๆ ฟังทีละบรรทัด

ถ้ายังอ่านโค้ดไม่ออก ให้ถาม AI ว่า "อธิบายทีละบรรทัด ห้ามแก้โค้ด"

## CP6 ส่งงาน (15 นาที)

```bash
git status
git add .
git commit -m "feat: แสดงรายการอุปกรณ์"
git push
```

1. เปิด repo บน GitHub รอจนมีเครื่องหมายถูกสีเขียวข้าง commit ล่าสุด
2. ส่งลิงก์ repo ตามช่องทางที่ผู้สอนแจ้ง

**ผ่าน** เมื่อมี commit ของตัวเองบน GitHub และ test ผ่าน

## โบนัส (ไม่บังคับ): Branch และ Pull Request

```bash
git checkout -b my-change
# เพิ่มหัวข้อ "บันทึกของฉัน" ท้าย README.md
git add .
git commit -m "docs: update README"
git push -u origin my-change
```

บน GitHub กด **Compare & pull request** ตรวจสิ่งที่แก้ แล้วกด **Merge pull request**
จากนั้นกลับมาที่เครื่อง

```bash
git switch main
git pull
```

โจทย์ท้าทาย: ก่อนสั่ง AI ใน CP5 ลองเขียนเงื่อนไขแบบ Given / When / Then 1 ข้อ

## ปัญหาที่พบบ่อย

| อาการ | วิธีแก้ |
|---|---|
| `npm : running scripts is disabled` | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` หรือใช้ Git Bash |
| `'node' is not recognized` | ปิดแล้วเปิด Terminal หรือ VS Code ใหม่ |
| `git push` ถามรหัสผ่านแล้วไม่ผ่าน | GitHub ไม่รับ password ให้ login ผ่าน Browser ที่ Git เปิดให้ |
| หน้าเว็บค้างที่ "กำลังโหลดข้อมูล" | ต้องเปิดผ่าน `npm run dev` ห้ามดับเบิลคลิก `index.html` แล้วดู error ในแท็บ Console |
| เลข port ไม่ใช่ 5173 | port เดิมถูกใช้อยู่ ให้ใช้ URL ที่ Terminal แสดง |
| โปรเจกต์อยู่ใน OneDrive หรือ path มีภาษาไทย | ย้ายไปไว้ที่ `C:\dev\` |
| `npm install` ช้าหรือค้าง | แจ้งผู้สอน |

## ทำไม่ทันในคาบ

ทำต่อที่บ้านได้ ต้อง push ให้ครบก่อนเริ่มคาบสัปดาห์ที่ 2
