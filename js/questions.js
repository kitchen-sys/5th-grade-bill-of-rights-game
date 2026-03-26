/* ========================================
   Capitol Boxes — Question Bank
   44 questions aligned to Indiana 5th-Grade
   Civics & Government standards
   ======================================== */

const QUESTION_BANK = [
  {
    id: "q001",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 1,
    question: "Which branch of government is responsible for making laws?",
    options: ["Executive Branch", "Legislative Branch", "Judicial Branch", "Electoral Branch"],
    answer: 1,
    explanation: "The Legislative Branch (Congress) makes the laws. It includes the Senate and the House of Representatives."
  },
  {
    id: "q002",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 1,
    question: "Who is the head of the Executive Branch?",
    options: ["Chief Justice", "Speaker of the House", "President", "Vice President"],
    answer: 2,
    explanation: "The President is the head of the Executive Branch and is responsible for enforcing the laws."
  },
  {
    id: "q003",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 1,
    question: "What is the main job of the Judicial Branch?",
    options: ["Write new laws", "Enforce the laws", "Interpret the laws", "Collect taxes"],
    answer: 2,
    explanation: "The Judicial Branch interprets laws and decides if they follow the Constitution. The Supreme Court is at the top of this branch."
  },
  {
    id: "q004",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 1,
    question: "What are the two parts of Congress?",
    options: ["Senate and Supreme Court", "Senate and House of Representatives", "House and Cabinet", "President and Congress"],
    answer: 1,
    explanation: "Congress is made up of two chambers: the Senate (100 members) and the House of Representatives (435 members)."
  },
  {
    id: "q005",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 2,
    question: "A bill has been passed by Congress. What happens next before it becomes a law?",
    options: ["The Supreme Court reviews it", "The President signs or vetoes it", "Citizens vote on it", "It automatically becomes law after 30 days"],
    answer: 1,
    explanation: "After Congress passes a bill, it goes to the President. The President can sign it into law or veto (reject) it."
  },
  {
    id: "q006",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 2,
    question: "Which branch includes the Supreme Court?",
    options: ["Legislative", "Executive", "Judicial", "Federal"],
    answer: 2,
    explanation: "The Supreme Court is the highest court in the Judicial Branch, which interprets the Constitution and federal laws."
  },
  {
    id: "q007",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 2,
    question: "The President is the Commander-in-Chief of which group?",
    options: ["Congress", "The Supreme Court", "The Armed Forces", "State Governors"],
    answer: 2,
    explanation: "As Commander-in-Chief, the President leads the United States military. This is one of the key powers of the Executive Branch."
  },
  {
    id: "q008",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 2,
    question: "How many justices serve on the Supreme Court?",
    options: ["7", "9", "11", "13"],
    answer: 1,
    explanation: "Nine justices serve on the Supreme Court \u2014 one Chief Justice and eight Associate Justices."
  },
  {
    id: "q009",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 3,
    question: "A new law requires all students to wear uniforms. A family believes this violates their rights. Where would they challenge this law?",
    options: ["The White House", "Congress", "The courts (Judicial Branch)", "The Department of Education"],
    answer: 2,
    explanation: "When people believe a law is unconstitutional, they can challenge it in court. The Judicial Branch decides if laws follow the Constitution."
  },
  {
    id: "q010",
    standard: "5.C.5",
    category: "branches",
    type: "mc",
    difficulty: 3,
    question: "Why did the Founders create three separate branches of government instead of one?",
    options: ["To give more people government jobs", "To prevent any one group from having too much power", "To make it easier to pass laws quickly", "To copy the British system of government"],
    answer: 1,
    explanation: "The Founders separated power into three branches so no single person or group could become too powerful \u2014 this is called separation of powers."
  },
  {
    id: "q011",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 1,
    question: "What does 'checks and balances' mean in our government?",
    options: ["The government checks how much money it has", "Each branch can limit the powers of the other branches", "The President checks on Congress every day", "Citizens balance the budget"],
    answer: 1,
    explanation: "Checks and balances means each branch of government has ways to limit or check the powers of the other two branches."
  },
  {
    id: "q012",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 1,
    question: "The President can veto a bill passed by Congress. This is an example of what?",
    options: ["Separation of powers", "Checks and balances", "Popular sovereignty", "Federalism"],
    answer: 1,
    explanation: "A presidential veto is one of the most well-known checks and balances \u2014 the Executive Branch checking the Legislative Branch."
  },
  {
    id: "q013",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 1,
    question: "Which branch has the power to declare a law unconstitutional?",
    options: ["Executive", "Legislative", "Judicial", "Military"],
    answer: 2,
    explanation: "The Judicial Branch (courts) can rule that a law is unconstitutional, which means it goes against the Constitution and cannot be enforced."
  },
  {
    id: "q014",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 2,
    question: "If the President vetoes a bill, what can Congress do?",
    options: ["Nothing \u2014 the bill is dead", "Override the veto with a two-thirds vote", "Ask the Supreme Court to sign it instead", "Call a new election"],
    answer: 1,
    explanation: "Congress can override a presidential veto if two-thirds of both the Senate and the House vote to pass the bill anyway."
  },
  {
    id: "q015",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 2,
    question: "Who must approve (confirm) the President's choice for a new Supreme Court justice?",
    options: ["The House of Representatives", "The Senate", "The other Supreme Court justices", "State governors"],
    answer: 1,
    explanation: "The Senate must confirm Supreme Court nominations. This is the Legislative Branch checking the Executive Branch's power."
  },
  {
    id: "q016",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 2,
    question: "Congress has the power to impeach the President. Which branch does Congress belong to?",
    options: ["Judicial", "Executive", "Legislative", "Independent"],
    answer: 2,
    explanation: "Congress (the Legislative Branch) can impeach and remove a President from office \u2014 this is one of its checks on the Executive Branch."
  },
  {
    id: "q017",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 3,
    question: "The President signs a treaty with another country. What must happen for the treaty to take effect?",
    options: ["The Supreme Court must review it", "The Senate must approve it by a two-thirds vote", "The House must vote on it", "It takes effect immediately"],
    answer: 1,
    explanation: "Treaties must be ratified by a two-thirds vote of the Senate. This is another example of checks and balances between the Executive and Legislative branches."
  },
  {
    id: "q018",
    standard: "5.C.5",
    category: "checks-and-balances",
    type: "mc",
    difficulty: 3,
    question: "Why is it important that Supreme Court justices serve for life and are not elected?",
    options: ["So they can make more money", "So they don't have to worry about being popular when making fair decisions", "So the President has less work to do", "Because the Constitution forgot to set a term limit"],
    answer: 1,
    explanation: "Life terms let justices make decisions based on the Constitution and the law, not on what voters or politicians want. This helps keep the Judicial Branch independent."
  },
  {
    id: "q019",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 1,
    question: "What is the Bill of Rights?",
    options: ["A list of all federal laws", "The first 10 amendments to the Constitution", "The rules for electing a President", "A document written by the king of England"],
    answer: 1,
    explanation: "The Bill of Rights is the first 10 amendments (changes) added to the Constitution in 1791 to protect individual freedoms."
  },
  {
    id: "q020",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 1,
    question: "The First Amendment protects which of these rights?",
    options: ["The right to bear arms", "Freedom of speech", "The right to a fair trial", "Protection from unfair searches"],
    answer: 1,
    explanation: "The First Amendment protects freedom of speech, religion, the press, assembly, and the right to petition the government."
  },
  {
    id: "q021",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 1,
    question: "Which amendment gives people the right to keep and bear arms?",
    options: ["First Amendment", "Second Amendment", "Fourth Amendment", "Fifth Amendment"],
    answer: 1,
    explanation: "The Second Amendment protects the right of the people to keep and bear arms."
  },
  {
    id: "q022",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 1,
    question: "The Fourth Amendment protects people from what?",
    options: ["Cruel punishments", "Unreasonable searches and seizures", "Having to testify against themselves", "Being denied a lawyer"],
    answer: 1,
    explanation: "The Fourth Amendment protects people from unreasonable searches and seizures by the government. Police generally need a warrant."
  },
  {
    id: "q023",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 2,
    question: "A student writes a letter to the school newspaper criticizing a new dress code. Which amendment most directly protects this action?",
    options: ["Second Amendment", "First Amendment", "Fifth Amendment", "Eighth Amendment"],
    answer: 1,
    explanation: "The First Amendment protects freedom of speech and freedom of the press, which includes writing and publishing opinions."
  },
  {
    id: "q024",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 2,
    question: "The Fifth Amendment says a person cannot be forced to be 'a witness against himself.' What does this mean?",
    options: ["You can't watch trials on TV", "You don't have to answer questions that could get you in trouble with the law", "Witnesses must always tell the truth", "You can refuse to go to court"],
    answer: 1,
    explanation: "The Fifth Amendment protects against self-incrimination \u2014 you cannot be forced to say things that might prove you committed a crime."
  },
  {
    id: "q025",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 2,
    question: "Which amendment guarantees the right to a speedy and public trial by jury?",
    options: ["Fourth Amendment", "Fifth Amendment", "Sixth Amendment", "Eighth Amendment"],
    answer: 2,
    explanation: "The Sixth Amendment guarantees the right to a speedy public trial, an impartial jury, and the right to a lawyer."
  },
  {
    id: "q026",
    standard: "5.C.3",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 2,
    question: "The Eighth Amendment bans 'cruel and unusual punishment.' Which of these would violate it?",
    options: ["A fine for littering", "Community service for vandalism", "Torture as a form of punishment", "A prison sentence for robbery"],
    answer: 2,
    explanation: "The Eighth Amendment forbids the government from using torture or excessively harsh punishments that don't fit the crime."
  },
  {
    id: "q027",
    standard: "5.H.16",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 3,
    question: "Why did many people insist that a Bill of Rights be added to the Constitution before they would support it?",
    options: ["They wanted the President to have more power", "They feared the new government might take away individual freedoms", "They thought the Constitution was too short", "They wanted to add more states"],
    answer: 1,
    explanation: "Anti-Federalists worried the new, stronger federal government could threaten individual liberties. The Bill of Rights was added to guarantee protections for the people."
  },
  {
    id: "q028",
    standard: "5.H.16",
    category: "bill-of-rights",
    type: "mc",
    difficulty: 3,
    question: "The Tenth Amendment says that powers not given to the federal government belong to whom?",
    options: ["The President", "The Supreme Court", "The states or the people", "Foreign governments"],
    answer: 2,
    explanation: "The Tenth Amendment reserves all powers not specifically granted to the federal government to the states or to the people. This limits federal power."
  },
  {
    id: "q029",
    standard: "5.C.2",
    category: "founding-docs",
    type: "mc",
    difficulty: 1,
    question: "Which document begins with 'We the People'?",
    options: ["The Declaration of Independence", "The Bill of Rights", "The United States Constitution", "The Mayflower Compact"],
    answer: 2,
    explanation: "The United States Constitution begins with 'We the People of the United States,' showing that the government's power comes from the people."
  },
  {
    id: "q030",
    standard: "5.C.2",
    category: "founding-docs",
    type: "mc",
    difficulty: 1,
    question: "What was the main purpose of the Declaration of Independence?",
    options: ["To set up a new government", "To declare the colonies free from British rule", "To create the Bill of Rights", "To elect the first President"],
    answer: 1,
    explanation: "The Declaration of Independence (1776) announced that the 13 colonies were breaking away from Great Britain and explained why."
  },
  {
    id: "q031",
    standard: "5.C.2",
    category: "founding-docs",
    type: "mc",
    difficulty: 2,
    question: "The Mayflower Compact (1620) is an early example of what idea?",
    options: ["Taxation without representation", "Self-government by the consent of the governed", "Freedom of religion", "Separation of church and state"],
    answer: 1,
    explanation: "The Mayflower Compact was an agreement among the Pilgrims to govern themselves by rules they agreed upon \u2014 an early form of self-government in America."
  },
  {
    id: "q032",
    standard: "5.H.15",
    category: "founding-docs",
    type: "mc",
    difficulty: 2,
    question: "Why did the Founders replace the Articles of Confederation with the Constitution?",
    options: ["The Articles gave the President too much power", "The Articles created a national government that was too weak", "The Articles did not include a Bill of Rights", "The British demanded a new document"],
    answer: 1,
    explanation: "Under the Articles of Confederation, the national government couldn't collect taxes, raise an army, or regulate trade. The Constitution created a stronger federal government."
  },
  {
    id: "q033",
    standard: "5.C.3",
    category: "founding-docs",
    type: "mc",
    difficulty: 3,
    question: "The idea of 'popular sovereignty' in the Constitution means that the ultimate power of government comes from where?",
    options: ["The military", "The states", "The people", "The President"],
    answer: 2,
    explanation: "Popular sovereignty means 'rule by the people.' The Constitution establishes that the government's authority comes from the consent of the governed."
  },
  {
    id: "q034",
    standard: "5.H.15",
    category: "founding-docs",
    type: "mc",
    difficulty: 3,
    question: "At the Constitutional Convention, the Great Compromise resolved a disagreement about what?",
    options: ["Whether to have a President or a king", "How states would be represented in Congress", "Whether slavery should be allowed", "How to amend the Constitution"],
    answer: 1,
    explanation: "Large and small states disagreed about representation. The Great Compromise created two chambers: the Senate (equal representation) and the House (based on population)."
  },
  {
    id: "q035",
    standard: "5.C.1",
    category: "preamble",
    type: "mc",
    difficulty: 1,
    question: "What is the Preamble to the Constitution?",
    options: ["The last section of the Constitution", "The introduction that states the goals of the government", "A list of all the amendments", "The signature page"],
    answer: 1,
    explanation: "The Preamble is the opening statement of the Constitution. It explains why the Constitution was written and what the government should do for its people."
  },
  {
    id: "q036",
    standard: "5.C.1",
    category: "preamble",
    type: "mc",
    difficulty: 2,
    question: "The Preamble says the government should 'establish justice' and 'ensure domestic tranquility.' What does 'domestic tranquility' mean?",
    options: ["Peace within the country", "Good weather", "Fair elections", "Trade with other nations"],
    answer: 0,
    explanation: "'Domestic tranquility' means peace and order within the United States. The government is responsible for keeping the country safe and peaceful at home."
  },
  {
    id: "q037",
    standard: "5.C.1",
    category: "preamble",
    type: "mc",
    difficulty: 2,
    question: "Which goal from the Preamble is about protecting the country from foreign threats?",
    options: ["Form a more perfect Union", "Establish justice", "Provide for the common defense", "Promote the general welfare"],
    answer: 2,
    explanation: "'Provide for the common defense' means the government should protect the nation and its people from outside attacks and threats."
  },
  {
    id: "q038",
    standard: "5.C.1",
    category: "preamble",
    type: "mc",
    difficulty: 3,
    question: "The Preamble says the Constitution was written to 'secure the blessings of liberty to ourselves and our posterity.' Who does 'posterity' refer to?",
    options: ["The Founding Fathers only", "All citizens alive in 1787", "Future generations", "Members of Congress"],
    answer: 2,
    explanation: "'Posterity' means future generations. The Founders wrote the Constitution to protect freedom not just for themselves, but for all Americans who would come after them."
  },
  {
    id: "q039",
    standard: "5.C.6",
    category: "civic-virtue",
    type: "mc",
    difficulty: 1,
    question: "Which of the following is an example of a civic virtue?",
    options: ["Ignoring community problems", "Respecting the rights and opinions of others", "Breaking rules you disagree with", "Only looking out for yourself"],
    answer: 1,
    explanation: "Civic virtues include respect, cooperation, civility, and responsible participation in your community."
  },
  {
    id: "q040",
    standard: "5.C.7",
    category: "civic-participation",
    type: "mc",
    difficulty: 1,
    question: "What is one important way citizens can participate in government?",
    options: ["Refusing to follow any laws", "Voting in elections", "Moving to a different country", "Ignoring the news"],
    answer: 1,
    explanation: "Voting is one of the most important ways citizens participate in government. It lets people choose their leaders and influence decisions."
  },
  {
    id: "q041",
    standard: "5.C.6",
    category: "civic-virtue",
    type: "mc",
    difficulty: 2,
    question: "A group of neighbors works together to clean up a local park. This is an example of what civic virtue?",
    options: ["Cooperation and responsible participation", "Following orders", "Paying taxes", "Running for office"],
    answer: 0,
    explanation: "Working together to improve your community shows cooperation and responsible participation \u2014 key civic virtues that strengthen society."
  },
  {
    id: "q042",
    standard: "5.C.7",
    category: "civic-participation",
    type: "mc",
    difficulty: 2,
    question: "Besides voting, how can citizens influence their government?",
    options: ["Only by running for office", "By writing letters to elected officials, attending town meetings, or signing petitions", "Citizens have no way to influence government between elections", "By refusing to pay taxes"],
    answer: 1,
    explanation: "Citizens can contact representatives, attend public meetings, sign petitions, join community organizations, and peacefully protest to make their voices heard."
  },
  {
    id: "q043",
    standard: "5.C.8",
    category: "civic-responsibility",
    type: "mc",
    difficulty: 2,
    question: "A city wants to build a new highway through a historic neighborhood. Citizens disagree about whether this is a good idea. This issue involves balancing what?",
    options: ["Individual rights and the common good", "The three branches of government", "Federal and state taxes", "The Bill of Rights and the Preamble"],
    answer: 0,
    explanation: "Many civic issues involve balancing individual rights (homeowners' property) with the common good (better transportation for everyone). Responsible citizens weigh both sides."
  },
  {
    id: "q044",
    standard: "5.C.8",
    category: "civic-responsibility",
    type: "mc",
    difficulty: 3,
    question: "Why is it important for citizens to stay informed about government decisions?",
    options: ["So they can gossip about politicians", "So they can hold their leaders accountable and make informed choices", "It isn't important \u2014 the government handles everything", "So they can avoid paying taxes"],
    answer: 1,
    explanation: "Informed citizens can hold leaders accountable, make better voting decisions, and actively participate in democracy. An informed citizenry is essential to self-government."
  }
];

const CATEGORY_LABELS = {
  'branches': 'Branches of Govt',
  'checks-and-balances': 'Checks & Balances',
  'bill-of-rights': 'Bill of Rights',
  'founding-docs': 'Founding Documents',
  'preamble': 'Preamble',
  'civic-virtue': 'Civic Virtue',
  'civic-participation': 'Civic Participation',
  'civic-responsibility': 'Civic Responsibility'
};
