let books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"]
let paragraph = `There are 30 books of the Bible in this paragraph. Can you find them? This is a most remarkable puzzle. It was found by a gentleman in an airplane seat pocket on a flight from Los Angeles to Honolulu, keeping him occupied for hours. He enjoyed it so much, he passed it on to some friends. One friend from Illinois worked on this while fishing from his john boat. Another friend studied it while playing his banjo. Elaine Taylor, a columnist friend, was so intrigued by it she mentioned it in her weekly newspaper column. Another friend judges the job of solving this puzzle so involving, she brews a cup of tea to help her nerves. There will be some names that are really easy to spot. That's a fact. Some people, however, will soon find themselves in a jam, especially since the book names are not necessarily capitalized. Truthfully, from answers we get, we are forced to admit it usually takes a minister or a scholar to see some of them at the worst. Research has shown that something in our genes is responsible for the difficulty we have in seeing the books in this paragraph. During a recent fund raising event, which featured this puzzle, the Alpha Delta Phi lemonade booth set a new record. The local paper, The Chronicle, surveyed over 200 patrons who reported that this puzzle was one of the most difficult they had ever seen. As Daniel Humana humbly puts it, "The books are all right here in plain view hidden from sight." Those able to find all of them will hear great lamentations from those who have to be shown. One revelation that may help is that books like Timothy and Samuel may occur without their numbers. Also, keep in mind, that punctuation and spaces in the middle are normal. A chipper attitude will help you compete really well against those who claim to know the answers. Remember, there is no need for a mad exodus. There really are 30 books of the Bible lurking somewhere in this paragraph waiting to be found. God Bless.`
// alternate paragraph

// paragraph = "I once made a remark about the hidden books of the Bible (merely by a fluke). It kept people looking so hard for the facts and for others it was a revelation. Some were in a jam, especially since the name of the books were not capitalized, but the truth finally struck home to numbers of readers. To others it was a real job. We want it to be a most fascinating few moments for you. Yes, there will be some really easy ones to spot. Others may require judges to help them. I will quickly admit it usually takes a minister to find one of them, and there will be loud lamentations when it is found. A little lady says she brews a cup of tea so she can concentrate better. See how well you can compete. Relax now. There really are sixteen names of books in this story."

// paragraph = "Someone showed me this story and remarked that there are 20 books of the Bible hidden here. He challenged me to find them. Sure enough they’re all here. Still this thing’s a lulu; kept me looking so hard for the longest time. Some of you will get bogged down with facts, others are hit by them like they were some kind of revelation or something. You may get in a jam, especially since the names are not capitalized and often leap the spaces between the words. This makes it a real job to find them, but it’ll provide a most fascinating few minutes for you. Yes, there are some really easy ones to spot, but don’t get the big head, cause truthfully, you’ll soon figure that it would take most federal judges and preachers numbers of hours to find them all. I will admit that it usually takes a minister to find one of them and that it is not uncommon for there to be loud lamentations when it is pointed out. One lady says that when she is confronted with puzzles like this, she brews a cup of tea to help her concentrate better, but then, this gal’s a real pro! Verbs, nouns, and all that stuff are her thing. See how well you can compete. Relax! There really are twenty names of Bible books in this story. If you fail to find them, there’s a penalty. You’ll have to fly a kite, sit on a banana, hum the battle hymn of the republic, or hose a dog (a mean one). Get to it!"

// method 1

// books.forEach(word =>  {
//     word = word.replace(/\d /g, "")
//     word = [...word]
//     word = new RegExp(`(?<=[^\*])${word.join("[^a-zA-z]*")}`, "gi")
//     let match = paragraph.match(word)?.[0]
//     paragraph = paragraph.replace(match, `**${match}**`)
// })

let matchIdentifierLeft = "**"
let matchIdentifierRight = "**"

// method 2
// one liner like a PRO

// new Set([...books.map(e => e.replace(/\d /g, ""))]).forEach(word =>  {paragraph = paragraph.replace(new RegExp(`${[...word].join("[^a-zA-z]*")}`, "gi"), `${matchIdentifierLeft}$&${matchIdentifierRight}`)})

// method 3

// paragraph = paragraph.replace(new RegExp(`(${[...new Set([...books.map(e => e.replace(/\d /g, ""))])].map(e => [...(e)].join("[^a-zA-z]*")).join("|")})`, "gi"), `${matchIdentifierLeft}$&${matchIdentifierRight}`)

// method 4
let counter = 1
paragraph = paragraph.replace(new RegExp(`(${[...new Set([...books.map(word => word.replace(/\d /g, ""))])].map(letter => [...(letter)].join("[^a-zA-z]*")).join("|")})`, "gi"), (match) => `${matchIdentifierLeft} ${counter++}. ${match}${matchIdentifierRight}`)


console.log(paragraph);