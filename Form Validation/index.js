const arr = [
  "💪 Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "🔥 Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "😊 Happiness depends upon ourselves. – Aristotle",
  "⏳ Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "✨ Act as if what you do makes a difference. It does. – William James",
  "🚀 It always seems impossible until it’s done. – Nelson Mandela",
  "🌟 Dream big and dare to fail. – Norman Vaughan",
  "🌞 Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "📅 Do something today that your future self will thank you for. – Unknown",
  "🌈 Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis"
];

let randomQuotes=document.getElementById("quotes")

const handleChange=()=>{
    const generate=arr[Math.floor(Math.random()*arr.length)]
    randomQuotes.textContent=generate
}
