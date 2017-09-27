'use strict';

var nicePhrases = [
  "You're gonna die someday, make it worthwhile.",
  "Do something.",
  "When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.",
  "Dreams are version of one reality's perfected",
  "An entire sea of water can't sink a ship unless it gets inside the ship. Similarly, the negativity of the world can't put you down unless you allow it to get inside you.",
  "There is nothing noble in being superior to your fellow men. True nobility lies in being superior to your former self.",
  "Success is the result of an attitude that can find the positive, worthwhile aspects of everything it comes into contact with and denies anything that may be negative or hindering.",
  "Build a figure in such a way that its pose tells what is in the soul of it. A gesture is a movement not of a body but of a soul",
  "Death is not the opposite of life, but a part of it.",
  "Everything passes. Nobody gets anything for keeps. And that's how we've got to live.",
  "Pain is inevitable. Suffering is optional. ",
  "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
  "Memories warm you up from the inside. But they also tear you apart.",
  "Whatever it is you're seeking won't come in the form you're expecting.",
  "Don't feel sorry for yourself. Only assholes do that.",
  "If you can love someone with your whole heart, even one person, then there's salvation in life. Even if you can't get together with that person.",
  "Don't you think it would be wonderful to get rid of everything and everybody and just go some place where you don't know a soul?",
  "Closing your eyes isn't going to change anything. Nothing's going to disappear just because you can't see what's going on. In fact, things will even be worse the next time you open your eyes. That's the kind of world we live in. Keep your eyes wide open. Only a coward closes his eyes. Closing your eyes and plugging up your ears won't make time stand still.",
  "That's what the world is , after all: an endless battle of contrasting memories.",
  "My biggest fear is that people will see me the way I see myself",
  "Spend your money on the things money can buy. Spend your time on the things money can't buy.",
  "No matter how far you travel, you can never get away from yourself.",
  "Most everything you think you know about me is nothing more than memories.",
  "The only guarantee in life is a life worth dying for.",
  "You can't hold hands when they make fists.",
  "Each day that gets to pass is a success.",
  "I heard a bird cry it was pathetic, man if you can fly spread feathers like a message",
  "Maybe there's only a dark road up ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit.",
  "If you're bored, then you're boring.",
  "I never want to be bound to anything. I always want to be able to come and go as I please.",
  "Everyone thinks of changing the world, but no one thinks of changing himself.",
  "They're doing their best to live very serious lives, and they just happen to fall down sometimes.",
  "At times, I feel as though the whole world is gray, as though time is standing still. But time never stops. It moves forward endlessly, as surely as bodies buried in the ground will one day become white bones. Listen, it's always you who stops time. If you stop in fear of the future - you gain nothing, and nothing begins. You spend your life as though already dead. Whether you wish it to or not - time never stops. That's why there is nothing more interesting than this world. Don't be too negative. You haven't become ashes just yet. You have your flesh and blood, and your bones are supporting you.",
  "Humans all behave the same way, like idiots. They all forget that someday, they're gonna die, so the moment they come face to face with death, they cling to life.",
  "Do you know what the most primitive emotion people have is? It's fear.",
  "I do not think humans are foolish. I have respect for people who live fulfilled lives.",
  "The present will always be different from the past. That's what makes life good and at the same time sad. That sadness in turn gives our everyday life some flavor. Just like coffee.",
  "Youth is fleeting. Young people can't even wait for a spoonful of sugar to dissolve and bitter regret is proof of that. But by bit, you get a taste for it.",
  "A strong man doesn't need to read the future. He makes his own.",
  "Even if you have regrets, even if you have remorse, you must fight. If you have made the decision for yourself to fight, to struggle, then fight with all you have. Do not give up for one second, one moment, or one instant. Cling greedily to the victory you have within your sight. If you can still stand, if your fingers still move, if all your teeth have not broken, stand and fight. You must fight!",
  "I want to show people how there are variations and different interpretations of good and evil. ",
  "I want to continue making things. ",
  "I try to watch a movie a day, if not more, and through movies, I learned about so many different political themes I hadn't been interested in and cultural things I hadn't been aware of and economic factors I hadn't thought about. ",
  "90% of what is considered impossible is, in fact, possible. The other 10% will become possible with the passage of time & technology.",
  "If something is possible, carry on as planned. Even if it isn't possible, do it anyway.",
  "The difference between the novice and the master is that the master has failed more times than the novice has tried.",
  "Anything can be a sword if you polish it enough.",
  "Total victory is scoring an easy win by doing what you always do.",
  "If you've got time to point fingers, then how about using your head to figure out what you want to do about it?",
  "What does it feel like, having your own death right before your eyes? That grand kaleidoscope glimpsed in the moments before death... What could be flashing through that perfect mind of yours?",
  "The past you've lost will never come back. I myself have made so many mistakes... But we can learn from the past so we don't repeat it.",
  "You may have grown too strong. Drunk on your own power, you forgot to put yourself in the shoes of someone weaker than you. That makes you no different than the student in the main campus.",
  "Even if everyone in the whole world dies, I won't care, as long as my beloved survives.",
  "If you want to run from your past, fine. But whatever you do, don't run away from your present or worse, your future.",
  "There's no such thing as a limit on being the best. You can always go for more. That's what it means to be human. No... That's what it means to be me.",
  "We have no reason to fear death, for we have become ghosts while still alive.",
  "Even if you're falling, that's okay. There's a trampoline waiting for you. It's so easy, you just have to believe",
  "When depressed, play Osu!",
  "You build on failure. You use it as a stepping stone. Close the door on the past. You don't try to forget the mistakes, but you don't dwell on it. You don't let it have any of your energy, or any of your time, or any of your space.",
  "Hatred is a form of torture your own mind.",
  "Think about your future game! Stay motivated.",
  "Prove these assholes that they were wrong!",
  "Freedom, isn't something earned through suffering or pushing yourself. You must accept yourself just as you are and live according to the flow of things; that is true freedom.",
  "Only hope can give rise to the emotion we call despair. But it is nearly impossible for a man to try to live without hope, so I guess that leaves Man no choice but to walk around with despair as his companion.",
  "I don't give a rat's ass about going to hell. I guess it's because I feel like I'm already there.",
  "Don't live your life making up excuses. The one making your choices is yourself!",
  "Fish use the water surrounding their bodies to sense what will happen next... you can't fight the current, you have to flow with it. If you do that, you might just catch the fish.",
  "If someone always follows the perfect path without ever facing hardship... Is it really what's best for that person?",
  "Maybe worrying about the future partings so much that you miss out on happiness in the present is a waste.",
  "Desire is a contract you make with yourself to be unhappy until you get what you want.",
  "For after all, the best thing one can do when it is raining is, let it rain.",
  "Everything in life is Yin and Yang. We inhale and we exhale. We sleep and we wake. We create and we rest. Don't expect happiness to last but don't expect depression to either. The only thing you should expect is balance. Enjoy the balance because it's only natural",
  "Pain Is Inevitable, Suffering Is Optional",
  "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
  "Don't underestimate the value of Doing Nothing, of just going along, listening to all the things you can't hear, and not bothering.",
  "Suffering is not holding you. You are holding suffering. When you become good at letting suffering go, then you'll come to realize how unnecessary it was for you to drag those burdens around with you. You'll see that no one else other than you was responsible.",
  "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and thus you have the power to revoke at any moment.",
  "A ship in harbor is safe, but that is not what ships are built for.",
  "Who is the happier man? He who has braved the storm of life and lived, or he who stayed securely on shore and merely existed?",
  "No man chooses evil because it is evil; he only mistakes it for happiness, the good he seeks.",
  "How lucky am I to have something that makes saying goodbye so hard",
  "Maturity begins when you can be right without having to prove the other person wrong.",
  "A man is only as good as his word. One day, you will be in a situation where it's all you have, and it had better be good enough.",
  "Fear... is forward. No one is afraid of yesterday.",
  "Everyone sees what you appear to be, few feel what you are.",
  "Holding onto anger is like drinking poison and expecting the other person to die.",
  "A man chooses, a slave obeys",
  "Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying I will try again tomorrow.",
  "Do not ask for an easy life but the strength to endure a hard one.",
  "Do what's right, even when no one is watching.",
  "As to the methods there may be a million and then some, but principles are few. The man who grasps principles can successfully select his own methods. The man who tries methods, ignoring principles, is sure to have trouble.",
  "We keep moving. And as we do, the things around us, well, they disappear.",
   "Every word has consequences. Every silence, too.",
  "There's no shortcut to victory. You have to climb that steep mountain one step at a time. There's an abyss down below and it never ends. Your only choice is to keep climbing!",
  
  

];

// Get random phrase
var random = nicePhrases[Math.floor(Math.random() * nicePhrases.length)];
// console.log(random);

document.getElementById("rathernice").textContent = random.toString();