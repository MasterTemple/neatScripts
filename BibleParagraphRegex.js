let books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"]
let paragraph = `There are 30 books of the Bible in this paragraph. Can you find them? This is a most remarkable puzzle. It was found by a gentleman in an airplane seat pocket on a flight from Los Angeles to Honolulu, keeping him occupied for hours. He enjoyed it so much, he passed it on to some friends. One friend from Illinois worked on this while fishing from his john boat. Another friend studied it while playing his banjo. Elaine Taylor, a columnist friend, was so intrigued by it she mentioned it in her weekly newspaper column. Another friend judges the job of solving this puzzle so involving, she brews a cup of tea to help her nerves. There will be some names that are really easy to spot. That's a fact. Some people, however, will soon find themselves in a jam, especially since the book names are not necessarily capitalized. Truthfully, from answers we get, we are forced to admit it usually takes a minister or a scholar to see some of them at the worst. Research has shown that something in our genes is responsible for the difficulty we have in seeing the books in this paragraph. During a recent fund raising event, which featured this puzzle, the Alpha Delta Phi lemonade booth set a new record. The local paper, The Chronicle, surveyed over 200 patrons who reported that this puzzle was one of the most difficult they had ever seen. As Daniel Humana humbly puts it, "The books are all right here in plain view hidden from sight." Those able to find all of them will hear great lamentations from those who have to be shown. One revelation that may help is that books like Timothy and Samuel may occur without their numbers. Also, keep in mind, that punctuation and spaces in the middle are normal. A chipper attitude will help you compete really well against those who claim to know the answers. Remember, there is no need for a mad exodus. There really are 30 books of the Bible lurking somewhere in this paragraph waiting to be found. God Bless.`

books.forEach(word =>  {
    word = word.replace(/\d /g, "")
    word = [...word]
    word = new RegExp(`${word.join("[^a-zA-z]*")}`, "gi")
    let match = paragraph.match(word)?.[0]
    paragraph = paragraph.replace(match, `**${match}**`)
})

console.log(paragraph);