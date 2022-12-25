1. create microservice sv 
2. create client sv (api ปกติ)

*** การคุยกัน ระหว่าง client กับ microservice สามารถคุยผ่านได้หลาย protocol 
ตัวอย่างนี้คือ TCP คือ ผ่าน host และ port 

มีทางอื่น เช่น MQTT, KAFKA, ... ***


การทำงาน คือ เรา call api ไปที่ client sv 
ตัว client sv จะ send message ไปหา microservice ตามที่ microservice provide message ไว้ จากนั้น ก็เข้ากระบวนการต่างๆ แล้ว microservice ก็ response กลับมา

request => auth => users => auth