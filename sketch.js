{
  /* <span style="color: blue; background: blue;"></span> */
}

//list of texts:
let myTexts = [
  "Your partners are sharing what’s on their minds, and you find that what they’re excited about is compatible with your goals and hopes for the future, as Mercury harmonizes with Jupiter. There are some deep secrets revealed as Mercury clashes with power planet Pluto, giving you a deeper understanding of other people’s fears. The full moon in Pisces gives you insight into a part of yourself that you normally don’t get to witness. Your dreams will definitely be more interesting, so pay attention to what they’re telling you. The sun enters your chart’s house of partnerships and interpersonal commitments! Libra season begins a new chapter in your relationships! Your planetary ruler Mars harmonizes with Saturn, increasing your drive to resolve tough challenges.",
  "This is a restful, familial time of year for you, Cancer. You’re getting to know more about your roots and past. You’re looking into the things that you share with your family as Mercury harmonizes with Jupiter, bringing lessons about your home and upbringing. Mercury clashes with power planet Pluto, giving you insight into how your childhood is repeated in relationships. The full moon in fellow water sign Pisces illuminates your chart’s house of learning and faraway travels, giving you insight into what you want to explore. This connects you to life’s mysteries, which can be a spiritual and faithful moment! Action planet Mars harmonizes with Saturn, the planet of standards and boundaries, which might feel like you’re doing a lot of heavy lifting in a shared task. Ask for a helping hand.",
];
let index = 0;

//take id from html and use my list for it
document.getElementById("source").innerText = myTexts[index];
//our resExp method:
regExp();

//event
document.getElementById("next-text").addEventListener("click", function () {
  index++;
  document.getElementById("source").innerText = myTexts[index % myTexts.length];
  regExp();
});

//console.log(document.getElementById("test").innerText); = keep just the text
//console.log(document.getElementById("test").innerHTML); = keep text + tags

function regExp() {
  //defined the selection regex
  let text = document.getElementById("source").innerText;
  const regex = /\b[a-lsptowy]\w+\b/gi;
  //replace method
  let outputText = text.replace(
    regex,
    '<span style="color: black; background: black;">REDACTED</span>'
  );
  console.log(outputText);
  document.getElementById("output").innerHTML = outputText;
}
