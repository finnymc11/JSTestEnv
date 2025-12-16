const fs = require('fs');
const raw = fs.readFileSync('data.json');
const data = JSON.parse(raw);

console.log(data);

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

const devices = [
  { id: 1, type: "phone", online: true },
  { id: 2, type: "laptop", online: false },
  { id: 3, type: "tablet", online: true },
  { id: 4, type: "desktop", online: true }
];

const result = devices
  .filter(device => device.online)
  .sort((a, b) => a.type.localeCompare(b.type));

console.log(result);