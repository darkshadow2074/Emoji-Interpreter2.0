import React, { useState } from "react";
import "./styles.css";
import logo from "./react.svg";
import "font-awesome/css/font-awesome.min.css";

let emoteDictonary = [
  {
    emote: "😀",
    tags: "happy",
    represent: "Grinning Face",
    meaning:
      "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor."
  },
  {
    emote: "😅",
    tags: "laugh",
    represent: "Grinning Face with Sweat",
    meaning:
      "Has the same grin and eyes as 😄 Grinning Face With Smiling Eyes but with a single, blue bead of sweat, usually over its left eye. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. "
  },
  {
    emote: "🤣",
    tags: "lol",
    represent: "Rolling on the Floor Laughing",
    meaning:
      "A yellow face with a big grin and scrunched, X-shaped eyes, tilted on its side as if rolling on the floor laughing (the internet acronym ROFL). Sheds two tears and tilts right on most platforms. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy."
  },
  {
    emote: "😉",
    tags: "blink eye",
    represent: "Winking Face",
    meaning:
      "A yellow face with a slight smile shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic."
  },

  {
    emote: "🙃",
    tags: "reverseHappy",
    represent: "Upside-Down Face",
    meaning:
      "A classic smiley, turned upside down. Implemented as a flipped version of  Slightly Smiling Face on most platforms. Commonly used to convey irony, sarcasm, joking, or a sense of goofiness or silliness."
  },
  {
    emote: "🥰",
    tags: "blushing",
    represent: "Smiling Face with Hearts",
    meaning:
      "A yellow face with smiling eyes, a closed smile, rosy cheeks, and several hearts floating around its head. Expresses a range of happy, affectionate feelings, especially being in love. The number of hearts (three or more) varies by platform."
  },
  {
    emote: "😘",
    tags: "kiss",
    represent: "Face Blowing a Kiss",
    meaning:
      "A yellow face winking with puckered lips blowing a kiss, depicted as a small, red heart. May represent a kiss goodbye or good night and convey feelings of love and affection more generally. "
  },
  {
    emote: "🤗",
    tags: "hug",
    represent: "Hugging Face",
    meaning:
      "A yellow face smiling with open hands, as if giving a hug. May be used to offer thanks and support, show love and care, or express warm, positive feelings more generally.  Due to its hand gesture, often used to represent jazz hands, indicating such feelings as excitement, enthusiasm, or a sense of flourish or accomplishment."
  },
  {
    emote: "🤪",
    tags: "mad",
    represent: "Zany Face",
    meaning:
      "A smiley making a silly face. A yellow face with a big grin and wide, white eyes, one larger than the other and in a wild, cockeyed expression. Many platforms, including Apple, depict its tongue stuck out and head tilted; others feature a full-toothed grin, giving it a more unhinged appearance. Commonly represents such activities as acting goofy, having fun, and partying as well as various senses of slang terms like crazy, usually in a positive manner. May convey a spirit of wackiness more generally."
  },
  {
    emote: "🤫",
    tags: "shutup",
    represent: "Shushing Face",
    meaning:
      "A yellow face placing an index finger over pursed lips, as if issuing Shh! or Shush! for silence. Some platforms feature raised eyebrows. Apple’s design suggests the face is tilting back slightly. May convey silence, quiet, secrecy, and discreetness. May also create a sense of buzz and anticipation, e.g., an exclusive sneak peek or news scoop."
  },
  {
    emote: "🤕",
    tags: "injured",
    represent: "Face with Head-Bandage",
    meaning:
      "A yellow face with a half-frown and white bandage wrapped around its head, often depicted partially over one eye. May represent physical injury or pain but also emotional hurting, sometimes for ironic effect."
  },
  {
    emote: "🤐",
    tags: "zipMouth",
    represent: "Zipper-Mouth Face",
    meaning:
      "A yellow face with simple, open eyes and a closed zipper for a mouth. Meaning widely varies, but commonly conveys a secret or that someone will keep one (e.g., My lips are sealed). May also be used to tell someone to stop talking (e.g., Zip it! or I’ll shut up now)."
  }
];

var details = "represent";
export default function App() {
  const [emojiRep, setEmojiRep] = useState("Select Your Emoji");
  const [emojiMean, setEmojiMean] = useState(
    "Emoji Details will be displayed on clicking them"
  );

  const generateLi = () => {
    return emoteDictonary.map((item, index) => {
      return (
        <div className="emote" onClick={emojiClick} key={index}>
          {item["emote"]}
        </div>
      );
    });
  };

  function emojiClick(event) {
    return emoteDictonary.map((item, index) => {
      if (event.target.innerText === item["emote"]) {
        var newValRep = item["represent"];
        setEmojiRep(newValRep);
        var newValMean = item["meaning"];
        setEmojiMean(newValMean);
      }
    });
  }
  const emojiChangeHandler = (e) => {
    emoteDictonary.map(({ emote, tags, represent, meaning }) => {
      if (e.target.value === emote || e.target.value === tags) {
        setEmojiRep(represent);
        setEmojiMean(meaning);
      }
    });
  };
  return (
    <div className="App">
      <nav className="navigation">
        <div className="container-fluid">
          <div className="brand">Emoji-Yard</div>
        </div>
      </nav>
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className=" container container-fluid about">
        <h1>About Emoji-Yard</h1>
        <span className="quote">
          <q style={{ padding: "10px" }}>
            Emoji's are The Best Way to Express Your Feelings
          </q>
        </span>
        <p>
          Emoji are ideograms and smileys used in electronic messages and web
          pages. Some examples of emoji are{" "}
          <span role="img">😃, 🧘, 🌍, 🍞, 🚗, 📞, 🎉, ♥️, and 🏁</span>. Emoji
          exist in various genres, including facial expressions, common objects,
          places and types of weather, and animals. They are much like
          emoticons, but emoji are pictures rather than typographic
          approximations; the term "emoji" in the strict sense refers to such
          pictures which can be represented as encoded characters, but it is
          sometimes applied to messaging stickers by extension.[2] Originally
          meaning pictograph, the word emoji comes from Japanese e (絵,
          "picture") + moji (文字, "character"); the resemblance to the English
          words emotion and emoticon is purely coincidental.[3] The ISO 15924
          script code for emoji is Zsye.
          <br></br>
          If You are confused about the meaning of the emoji you can click on
          the emoji's .<br></br> Emoji-Yard help us to make us understand which
          emoji's represent what meaning.
        </p>
      </div>
      <div className="container container-fluid">
        <h1 className="working">Checkout Your Emoji </h1>
        <input
          className="searchEmoji"
          placeholder="Enter your Emoji"
          onChange={(e) => emojiChangeHandler(e)}
        />
        <div className="emote-div">
          <div className="emote-container">{generateLi()}</div>
          <div className="represent">
            <p>{emojiRep}</p>
            <h4>{emojiMean}</h4>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-header">Connect With Me</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a
              className="link"
              target="_blank"
              href="https://github.com/darkshadow2074"
            >
              Github
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              target="_blank"
              href="https://twitter.com/AkashKu80823217"
            >
              Twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/akash-kumar-singh-48a624157/"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <p>All Rights Are Reseved &copy; 2020 To Akash-Kumar</p>
      </footer>
    </div>
  );
}
