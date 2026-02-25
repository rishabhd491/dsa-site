const categories = [
  {
    id: "arrays",
    label: "Arrays",
    file: "TCS_NQT_Arrays_Full_Questions_Answers_CPP.md",
    explainFile: "array_explaination_eachcode.md",
    questionExplainFile: "array_question_explaination_eachquestion.md",
  },
  {
    id: "strings",
    label: "Strings",
    file: "TCS_NQT_Strings_Full_Questions_Answers_CPP.md",
    explainFile: "string_explaination_eachcode.md",
    questionExplainFile: "string_question_explaination_eachquestion.md",
  },
  {
    id: "sliding-window",
    label: "Sliding Window",
    file: "TCS_NQT_Sliding_Window_Full_Questions_Answers_CPP.md",
    explainFile: "sliding_window_explaination_eachcode.md",
    questionExplainFile: "sliding_window_question_explaination_eachquestion.md",
  },
  {
    id: "two-pointers",
    label: "Two Pointers",
    file: "TCS_NQT_Two_Pointers_Full_Questions_Answers_CPP.md",
    explainFile: "two_pointers_explaination_eachcode.md",
    questionExplainFile: "two_pointers_question_explaination_eachquestion.md",
  },
  {
    id: "2d-array",
    label: "2D Arrays / Matrices",
    file: "TCS_NQT_2D_Array_Matrix_Full_Questions_Answers_CPP.md",
    explainFile: "array2d_matrix_explaination_eachcode.md",
    questionExplainFile: "array2d_matrix_question_explaination_eachquestion.md",
  },
  {
    id: "binary-search",
    label: "Binary Search",
    file: "TCS_NQT_Binary_Search_Full_Questions_Answers_CPP.md",
    explainFile: "binary_search_explaination_eachcode.md",
    questionExplainFile: "binary_search_question_explaination_eachquestion.md",
  },
  {
    id: "bit-manipulation",
    label: "Bit Manipulation",
    file: "TCS_NQT_Bit_Manipulation_Full_Questions_Answers_CPP.md",
    explainFile: "bit_manipulation_explaination_eachcode.md",
    questionExplainFile: "bit_manipulation_question_explaination_eachquestion.md",
  },
  {
    id: "greedy",
    label: "Greedy",
    file: "TCS_NQT_Greedy_Full_Questions_Answers_CPP.md",
    explainFile: "greedy_explaination_eachcode.md",
    questionExplainFile: "greedy_question_explaination_eachquestion.md",
  },
  {
    id: "dp",
    label: "Dynamic Programming",
    file: "TCS_NQT_DP_Master_CPP.md",
    explainFile: "dp_explaination_eachcode.md",
    questionExplainFile: "dp_question_explaination_eachquestion.md",
  },
  {
    id: "hashing",
    label: "Hashing",
    file: "TCS_NQT_Hashing_Full_Questions_Answers_CPP.md",
    explainFile: "hashing_explaination_eachcode.md",
    questionExplainFile: "hashing_question_explaination_eachquestion.md",
  },
  {
    id: "prefix-sum",
    label: "Prefix Sum",
    file: "TCS_NQT_Prefix_Sum_Full_Questions_Answers_CPP.md",
  },
  {
    id: "input-validation",
    label: "Coding Input Validation / Edge Cases",
    file: "TCS_NQT_Coding_Input_Validation_Edge_Cases_CPP.md",
  },
  {
    id: "linked-list",
    label: "Linked List",
    file: "TCS_NQT_LinkedList_Full_Questions_Answers_CPP.md",
    explainFile: "linkedlist_explaination_eachcode.md",
    questionExplainFile: "linkedlist_question_explaination_eachquestion.md",
  },
  {
    id: "maths",
    label: "Maths / Numbers",
    file: "TCS_NQT_Maths_Numbers_Full_Questions_Answers_CPP.md",
    explainFile: "maths_numbers_explaination_eachcode.md",
    questionExplainFile: "maths_numbers_question_explaination_eachquestion.md",
  },
  {
    id: "queue",
    label: "Queue",
    file: "TCS_NQT_Queue_Full_Questions_Answers_CPP.md",
    explainFile: "queue_explaination_eachcode.md",
    questionExplainFile: "queue_question_explaination_eachquestion.md",
  },
  {
    id: "heap-priority",
    label: "Heap / Priority Queue",
    file: "TCS_NQT_Heap_PriorityQueue_Full_Questions_Answers_CPP.md",
  },
  {
    id: "stl",
    label: "STL (Sets / Maps / Vectors)",
    file: "TCS_NQT_STL_Sets_Maps_Vector_Usage_CPP.md",
  },
  {
    id: "stack",
    label: "Stack",
    file: "TCS_NQT_Stack_Full_Questions_Answers_CPP.md",
    explainFile: "stack_explaination_eachcode.md",
    questionExplainFile: "stack_question_explaination_eachquestion.md",
  },
  {
    id: "recursion",
    label: "Recursion",
    file: "TCS_NQT_Recursion_Full_Questions_Answers_CPP.md",
    explainFile: "recursion_explaination_eachcode.md",
    questionExplainFile: "recursion_question_explaination_eachquestion.md",
  },
  {
    id: "story-simulation",
    label: "Story / Simulation",
    file: "TCS_NQT_Story_Simulation_Master_CPP.md",
    explainFile: "story_simulation_explaination_eachcode.md",
    questionExplainFile: "story_simulation_question_explaination_eachquestion.md",
  },
];

const categoryState = {};
const explanationState = {};
const questionExplanationState = {};

const mustDoByCategory = {
  arrays: [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q7",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q14",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q22",
    "Q23",
    "Q25",
    "Q26",
    "Q28",
    "Q29",
    "Q31",
    "Q32",
    "Q33",
    "Q34",
    "Q35",
    "Q37",
    "Q38",
    "Q39"
  ],
  "prefix-sum": [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q14",
    "Q17",
    "Q18",
    "Q20",
    "Q21"
  ],
  hashing: [
    "Q1",
    "Q2",
    "Q3",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q13",
    "Q14",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q22",
    "Q26",
    "Q27",
    "Q28",
    "Q29",
    "Q30",
    "Q31",
    "Q32",
    "Q33",
    "Q34",
    "Q35",
    "Q37",
    "Q38",
    "Q39",
    "Q40",
    "Q41"
  ],
  strings: [
    "Q1",
    "Q2",
    "Q4",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q24",
    "Q25",
    "Q26",
    "Q28",
    "Q31",
    "Q33",
    "Q34",
    "Q35",
    "Q36",
    "Q37",
    "Q38",
    "Q39",
    "Q40",
    "Q41",
    "Q42"
  ],
  "sliding-window": [
    "Q1",
    "Q3",
    "Q4",
    "Q5",
    "Q9",
    "Q10",
    "Q11",
    "Q13",
    "Q14",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q23",
    "Q24",
    "Q25",
    "Q27",
    "Q28",
    "Q29",
    "Q30",
    "Q34",
    "Q36",
    "Q38",
    "Q39",
    "Q40"
  ],
  "two-pointers": [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q14",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q23",
    "Q25",
    "Q26",
    "Q29",
    "Q31",
    "Q39",
    "Q40"
  ],
  "bit-manipulation": [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q22",
    "Q23",
    "Q24",
    "Q26",
    "Q27",
    "Q28",
    "Q29",
    "Q30",
    "Q31",
    "Q32",
    "Q38",
    "Q39",
    "Q43",
    "Q44",
    "Q45"
  ],
  maths: [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q6",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q24",
    "Q27",
    "Q29",
    "Q30",
    "Q31",
    "Q32",
    "Q33",
    "Q34",
    "Q39",
    "Q40"
  ],
  stack: [
    "Q1",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q12",
    "Q13",
    "Q14",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q24",
    "Q25"
  ],
  queue: [
    "Q1",
    "Q3",
    "Q5",
    "Q6",
    "Q7",
    "Q9",
    "Q10",
    "Q11",
    "Q13",
    "Q14",
    "Q15",
    "Q18",
    "Q20",
    "Q22",
    "Q24",
    "Q25"
  ],
  "heap-priority": [
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q9",
    "Q11",
    "Q12",
    "Q15",
    "Q16",
    "Q18",
    "Q20"
  ],
  "binary-search": [
    "Q1",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q12",
    "Q13",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q22",
    "Q23",
    "Q24",
    "Q25",
    "Q26",
    "Q27",
    "Q28"
  ],
  greedy: [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q14",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q21",
    "Q23",
    "Q27",
    "Q34",
    "Q35"
  ],
  dp: [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q12",
    "Q13",
    "Q14",
    "Q16",
    "Q18",
    "Q20",
    "Q24",
    "Q25",
    "Q26",
    "Q27",
    "Q28",
    "Q30",
    "Q33"
  ],
  "linked-list": [
    "Q1",
    "Q2",
    "Q4",
    "Q6",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q14",
    "Q15",
    "Q16",
    "Q18",
    "Q21",
    "Q25"
  ],
  "2d-array": [
    "Q1",
    "Q4",
    "Q6",
    "Q8",
    "Q10",
    "Q15",
    "Q16",
    "Q17",
    "Q19",
    "Q20",
    "Q24",
    "Q25",
    "Q26",
    "Q27",
    "Q29",
    "Q31",
    "Q39",
    "Q40"
  ],
  "story-simulation": [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q15",
    "Q16",
    "Q19",
    "Q20",
    "Q21",
    "Q22",
    "Q23",
    "Q24",
    "Q25",
    "Q26",
    "Q27",
    "Q28",
    "Q31",
    "Q32"
  ],
  recursion: [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q10",
    "Q13",
    "Q17",
    "Q18",
    "Q21",
    "Q24",
    "Q27",
    "Q29"
  ],
  stl: [
    "Q1",
    "Q2",
    "Q3",
    "Q4"
  ]
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function simpleMarkdownToHtml(markdown) {
  const lines = markdown.split("\n");
  const html = [];
  let inCode = false;
  let inUl = false;
  let inOl = false;

  function closeLists() {
    if (inUl) {
      html.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      html.push("</ol>");
      inOl = false;
    }
  }

  for (let raw of lines) {
    const line = raw.replace(/\r$/, "");

    if (line.trim().startsWith("```")) {
      if (!inCode) {
        closeLists();
        inCode = true;
        html.push("<pre><code>");
      } else {
        inCode = false;
        html.push("</code></pre>");
      }
      continue;
    }

    if (inCode) {
      html.push(escapeHtml(line) + "\n");
      continue;
    }

    let match;

    match = line.match(/^###\s+(.*)/);
    if (match) {
      closeLists();
      html.push("<h4>" + escapeHtml(match[1]) + "</h4>");
      continue;
    }

    match = line.match(/^##\s+(.*)/);
    if (match) {
      closeLists();
      html.push("<h3>" + escapeHtml(match[1]) + "</h3>");
      continue;
    }

    match = line.match(/^\s*[-*]\s+(.*)/);
    if (match) {
      if (!inUl) {
        closeLists();
        inUl = true;
        html.push("<ul>");
      }
      html.push("<li>" + escapeHtml(match[1]) + "</li>");
      continue;
    }

    match = line.match(/^\s*\d+\.\s+(.*)/);
    if (match) {
      if (!inOl) {
        closeLists();
        inOl = true;
        html.push("<ol>");
      }
      html.push("<li>" + escapeHtml(match[1]) + "</li>");
      continue;
    }

    if (line.trim() === "") {
      closeLists();
      html.push("<br/>");
      continue;
    }

    closeLists();
    html.push("<p>" + escapeHtml(line) + "</p>");
  }

  if (inUl) html.push("</ul>");
  if (inOl) html.push("</ol>");

  return html.join("");
}

function parseQuestionsFromMarkdown(markdown) {
  const lines = markdown.split("\n");
  const questions = [];

  let current = null;
  let currentSection = null;

  function pushCurrent() {
    if (!current) return;
    const problemText = current.problemLines.join("\n").trim();
    const answerText = current.answerLines.join("\n").trim();
    const codeSnippet = extractFirstCodeBlock(answerText);
    questions.push({
      id: current.id,
      title: current.title,
      problemMarkdown: problemText,
      answerMarkdown: answerText,
      codeSnippet,
    });
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\r$/, "");

    const qMatch = line.match(/^##\s+Q(\d+)\.\s+(.*)/);
    if (qMatch) {
      if (current) {
        pushCurrent();
      }
      current = {
        id: "Q" + qMatch[1],
        title: qMatch[2].trim(),
        problemLines: [],
        answerLines: [],
        hasProblem: false,
      };
      currentSection = null;
      continue;
    }

    if (!current) continue;

    const hMatch = line.match(/^###\s+(.*)/);
    if (hMatch) {
      const headingText = hMatch[1].trim().toLowerCase();
      if (headingText === "problem statement") {
        currentSection = "problem";
        current.hasProblem = true;
      } else if (!current.hasProblem) {
        currentSection = "problem";
        current.hasProblem = true;
      } else {
        currentSection = "answer";
      }
      if (currentSection === "problem") {
        current.problemLines.push(line);
      } else {
        current.answerLines.push(line);
      }
      continue;
    }

    if (line.trim() === "---") {
      continue;
    }

    if (!currentSection) {
      current.problemLines.push(line);
    } else if (currentSection === "problem") {
      current.problemLines.push(line);
    } else {
      current.answerLines.push(line);
    }
  }

  if (current) {
    pushCurrent();
  }

  return questions;
}

function parseInputValidationQuestions(markdown) {
  const lines = markdown.split("\n");
  const sections = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\r$/, "");

    const match = line.match(/^##\s+(\d+)\)\s+(.*)/);
    if (match) {
      if (current) {
        sections.push(current);
      }
      current = {
        id: "Q" + match[1],
        title: match[2].trim(),
        lines: [line],
      };
    } else if (current) {
      current.lines.push(line);
    }
  }

  if (current) {
    sections.push(current);
  }

  return sections.map((sec) => {
    const secLines = sec.lines;
    const problemLines = [];
    const answerLines = [];
    let inCode = false;

    for (let i = 0; i < secLines.length; i++) {
      const line = secLines[i];
      const trimmed = line.trim();
      if (trimmed.startsWith("```")) {
        inCode = !inCode;
        answerLines.push(line);
        continue;
      }
      if (inCode) {
        answerLines.push(line);
      } else {
        problemLines.push(line);
      }
    }

    const problemMarkdown = problemLines.join("\n").trim();
    const answerMarkdown = answerLines.join("\n").trim();
    const codeSnippet = extractFirstCodeBlock(answerMarkdown);

    return {
      id: sec.id,
      title: sec.title,
      problemMarkdown,
      answerMarkdown,
      codeSnippet,
    };
  });
}

function extractTopicIntro(markdown, categoryId) {
  const lines = markdown.split("\n");
  const out = [];
  const isInputValidation = categoryId === "input-validation";

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\r$/, "");
    if (!isInputValidation) {
      if (/^##\s+Q\d+\./.test(line)) {
        break;
      }
    } else {
      if (/^##\s+\d+\)\s+/.test(line)) {
        break;
      }
    }
    out.push(line);
  }

  return out.join("\n").trim();
}

function extractFirstCodeBlock(markdown) {
  if (!markdown) return "";
  const lines = markdown.split("\n");
  let inCode = false;
  const codeLines = [];

  for (let raw of lines) {
    const line = raw.replace(/\r$/, "");
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (!inCode) {
        inCode = true;
      } else {
        break;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
    }
  }

  return codeLines.join("\n").trim();
}

function parseExplanationFile(markdown) {
  const lines = markdown.split("\n");
  const byQuestionId = {};
  let currentQuestionId = null;
  let collecting = false;
  const buffer = [];

  function pushCurrent() {
    if (!currentQuestionId) return;
    if (!buffer.length) return;
    const text = buffer.join("\n").trim();
    if (text) byQuestionId[currentQuestionId] = text;
  }

  for (let raw of lines) {
    const line = raw.replace(/\r$/, "");

    if (line.startsWith("## ")) {
      if (collecting) {
        pushCurrent();
        buffer.length = 0;
        collecting = false;
      }
      const qMatch = line.match(/Q(\d+)\./);
      if (qMatch) {
        currentQuestionId = "Q" + qMatch[1];
      } else {
        currentQuestionId = null;
      }
      continue;
    }

    if (!currentQuestionId) continue;

    if (line.startsWith("### Line-by-Line")) {
      collecting = true;
      buffer.push(line);
      continue;
    }

    if (collecting) {
      buffer.push(line);
    }
  }

  if (collecting) {
    pushCurrent();
  }

  return byQuestionId;
}

function loadExplanationsForCategory(category) {
  if (!category || !category.explainFile) {
    return Promise.resolve({});
  }

  const existing = explanationState[category.id];
  if (existing && existing.byQuestionId) {
    return Promise.resolve(existing.byQuestionId);
  }

  return fetch(category.explainFile)
    .then((res) => res.text())
    .then((text) => {
      const byQuestionId = parseExplanationFile(text);
      explanationState[category.id] = { byQuestionId };
      return byQuestionId;
    })
    .catch((err) => {
      console.error(err);
      explanationState[category.id] = { byQuestionId: {} };
      return {};
    });
}

function parseQuestionExplanationFile(markdown) {
  const lines = markdown.split("\n");
  const byQuestionId = {};
  let currentQuestionId = null;
  const buffer = [];

  function pushCurrent() {
    if (!currentQuestionId) return;
    if (!buffer.length) return;
    const text = buffer.join("\n").trim();
    if (text) byQuestionId[currentQuestionId] = text;
  }

  for (let raw of lines) {
    const line = raw.replace(/\r$/, "");

    if (line.startsWith("## ")) {
      pushCurrent();
      buffer.length = 0;
      const qMatch = line.match(/Q(\d+)\./);
      if (qMatch) {
        currentQuestionId = "Q" + qMatch[1];
        buffer.push(line);
      } else {
        currentQuestionId = null;
      }
      continue;
    }

    if (!currentQuestionId) continue;
    buffer.push(line);
  }

  pushCurrent();
  return byQuestionId;
}

function loadQuestionExplanationsForCategory(category) {
  if (!category || !category.questionExplainFile) {
    return Promise.resolve({});
  }

  const existing = questionExplanationState[category.id];
  if (existing && existing.byQuestionId) {
    return Promise.resolve(existing.byQuestionId);
  }

  return fetch(category.questionExplainFile)
    .then((res) => res.text())
    .then((text) => {
      const byQuestionId = parseQuestionExplanationFile(text);
      questionExplanationState[category.id] = { byQuestionId };
      return byQuestionId;
    })
    .catch((err) => {
      console.error(err);
      questionExplanationState[category.id] = { byQuestionId: {} };
      return {};
    });
}

function explainCodeLine(line) {
  const t = line.trim();
  if (t === "") return "";

  const minAssign = t.match(/^(\w+)\s*=\s*min\s*\(\s*([^,]+)\s*,\s*([^)]+)\);?/);
  if (minAssign) {
    const [, lhs, a, b] = minAssign;
    return `Updates ${lhs} to the smaller of ${a.trim()} and ${b.trim()}.`;
  }

  const maxAssign = t.match(/^(\w+)\s*=\s*max\s*\(\s*([^,]+)\s*,\s*([^)]+)\);?/);
  if (maxAssign) {
    const [, lhs, a, b] = maxAssign;
    return `Updates ${lhs} to the larger of ${a.trim()} and ${b.trim()}.`;
  }

  const pushBack = t.match(/^(\w+)\.push_back\((.+)\);/);
  if (pushBack) {
    const [, vec, value] = pushBack;
    return `Appends ${value.trim()} to the vector ${vec}.`;
  }

  const swapCall = t.match(/^swap\((.+),\s*(.+)\);/);
  if (swapCall) {
    const [, a, b] = swapCall;
    return `Swaps the values of ${a.trim()} and ${b.trim()}.`;
  }

  const mapIncrement = t.match(/^(\w+)\[(.+)\]\s*\+\+;/);
  if (mapIncrement) {
    const [, obj, key] = mapIncrement;
    return `Increments the count for key ${key.trim()} in ${obj}.`;
  }

  const mapAssign = t.match(/^(\w+)\[(.+)\]\s*=\s*(.+);/);
  if (mapAssign) {
    const [, obj, key, value] = mapAssign;
    return `Stores ${value.trim()} at key ${key.trim()} in ${obj}.`;
  }

  const plusAssign = t.match(/^(\w+)\s*\+=\s*(.+);/);
  if (plusAssign) {
    const [, lhs, rhs] = plusAssign;
    return `Adds ${rhs.trim()} to ${lhs} and stores the result back in ${lhs}.`;
  }

  const minusAssign = t.match(/^(\w+)\s*-=\s*(.+);/);
  if (minusAssign) {
    const [, lhs, rhs] = minusAssign;
    return `Subtracts ${rhs.trim()} from ${lhs} and stores the result back in ${lhs}.`;
  }

  const xorAssign = t.match(/^(\w+)\s*\^=\s*(.+);/);
  if (xorAssign) {
    const [, lhs, rhs] = xorAssign;
    return `XORs ${lhs} with ${rhs.trim()} and stores the result back in ${lhs}.`;
  }

  const simpleAssign = t.match(/^(\w+)\s*=\s*(.+);/);
  if (simpleAssign) {
    const [, lhs, rhs] = simpleAssign;
    return `Assigns ${rhs.trim()} to ${lhs}.`;
  }

  if (t.startsWith("#include")) {
    if (t.includes("bits/stdc++.h")) {
      return "Includes almost all standard C++ library headers.";
    }
    return "Includes a standard C++ library header file.";
  }

  if (t === "using namespace std;") {
    return "Lets you use std library names without the std:: prefix.";
  }

  const declInit =
    t.match(/^(int|long long|double|float|char|bool)\s+(\w+)\s*=\s*(.+);/) ||
    t.match(/^(auto)\s+(\w+)\s*=\s*(.+);/);
  if (declInit) {
    const [, type, name, value] = declInit;
    return `Declares ${type} variable ${name} and initializes it with ${value.trim()}.`;
  }

  const declOnly =
    t.match(/^(int|long long|double|float|char|bool)\s+(.+);/) ||
    t.match(/^auto\s+(.+);/);
  if (declOnly) {
    const [, rest] = declOnly;
    return `Declares variable(s): ${rest.trim()}.`;
  }

  if (/^int\s+main\s*\(/.test(t)) {
    return "Defines the main function where program execution starts.";
  }

  if (t === "{") {
    return "Begins a new block scope.";
  }

  if (t === "}" || t === "};") {
    return "Ends the current block scope.";
  }

  if (t.startsWith("ios::sync_with_stdio")) {
    return "Speeds up C++ standard I/O by unsyncing with C stdio.";
  }

  if (t.startsWith("cin.tie")) {
    return "Unties cin from cout to avoid flushing cout on every input.";
  }

  if (/^cout\s*<</.test(t) || t.includes("cout <<")) {
    return "Prints output to standard output stream.";
  }

  if (/^cin\s*>>/.test(t) || t.includes("cin >>")) {
    return "Reads input from standard input stream.";
  }

  if (/^vector</.test(t)) {
    return "Declares a dynamic array (vector) of elements.";
  }

  const forFromZero = t.match(/^for\s*\(\s*int\s+(\w+)\s*=\s*0\s*;\s*\1\s*<\s*(.+)\s*;\s*\1\+\+\s*\)/);
  if (forFromZero) {
    const [, i, limit] = forFromZero;
    return `Loops ${i} from 0 up to (but not including) ${limit.trim()} to process each element.`;
  }

  const forFromEnd = t.match(
    /^for\s*\(\s*int\s+(\w+)\s*=\s*(.+)\s*;\s*\1\s*>=\s*(.+)\s*;\s*\1--\s*\)/
  );
  if (forFromEnd) {
    const [, i, start, end] = forFromEnd;
    return `Loops ${i} from ${start.trim()} down to ${end.trim()}, iterating backwards.`;
  }

  if (/^for\s*\(/.test(t)) {
    return "Starts a for-loop to repeat a block of code.";
  }

  if (/^while\s*\(/.test(t)) {
    return "Starts a while-loop that repeats while a condition is true.";
  }

  const ifCond = t.match(/^if\s*\(\s*(.+)\s*(<=|>=|<|>|==|!=)\s*(.+)\s*\)\s*{?$/);
  if (ifCond) {
    const [, left, op, right] = ifCond;
    return `Checks whether ${left.trim()} ${op} ${right.trim()} holds; if true, executes the following block.`;
  }

  if (/^if\s*\(/.test(t)) {
    return "Starts an if-condition block.";
  }

  if (/^else\b/.test(t)) {
    return "Starts the else part of a conditional.";
  }

  if (t.startsWith("return ")) {
    return "Returns a value and ends the current function.";
  }

  return "Executes this C++ statement as part of the algorithm.";
}

function buildExplanationMarkdownFromCode(code) {
  if (!code) {
    return "### Explanation\n\nNo C++ solution code found to explain.";
  }

  const lines = code.split("\n");
  const out = [];
  out.push("### Explanation (line by line)");

  for (let raw of lines) {
    const line = raw.replace(/\r$/, "");
    const trimmed = line.trim();
    if (!trimmed) continue;
    const explanation = explainCodeLine(line);
    const safeLine = line.replace(/`/g, "\\`");
    out.push("- `" + safeLine + "` – " + explanation);
  }

  if (out.length === 1) {
    out.push("No meaningful lines found in this code snippet.");
  }

  return out.join("\n");
}

function loadQuestionsForCategory(category) {
  const existing = categoryState[category.id];
  if (existing && existing.questions) {
    return Promise.resolve(existing.questions);
  }

  return fetch(category.file)
    .then((res) => res.text())
    .then((text) => {
      const introMarkdown = extractTopicIntro(text, category.id);
      const questions =
        category.id === "input-validation"
          ? parseInputValidationQuestions(text)
          : parseQuestionsFromMarkdown(text);
      categoryState[category.id] = { questions, introMarkdown };
      updateCategoryCounts();
      return questions;
    });
}

function createCategoryList() {
  const container = document.getElementById("category-list");
  if (!container) return;

  container.innerHTML = "";

  categories.forEach((cat) => {
    const button = document.createElement("button");
    button.className = "category-item";
    button.dataset.categoryId = cat.id;

    const labelSpan = document.createElement("span");
    labelSpan.className = "category-label";
    labelSpan.textContent = cat.label;

    const countSpan = document.createElement("span");
    countSpan.className = "category-count";
    countSpan.textContent = "";

    button.appendChild(labelSpan);
    button.appendChild(countSpan);

    button.addEventListener("click", () => {
      setActiveCategory(cat.id);
    });

    container.appendChild(button);
  });
}

function setActiveCategory(categoryId) {
  const toolbarLabel = document.getElementById("current-category-label");
  const searchInput = document.getElementById("search-input");
  const scopeSelect = document.getElementById("search-scope");

  const buttons = document.querySelectorAll(".category-item");
  buttons.forEach((btn) => {
    if (btn.dataset.categoryId === categoryId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return;

  if (toolbarLabel) {
    toolbarLabel.textContent = cat.label;
  }

  if (searchInput) {
    searchInput.value = "";
  }
  if (scopeSelect) {
    scopeSelect.value = "topic";
  }

  ensureCategoryLoaded(cat, "");
}

function ensureCategoryLoaded(category, searchTerm) {
  renderLoading();
  loadQuestionsForCategory(category)
    .then((questions) => {
      renderQuestions(category, questions, searchTerm);
    })
    .catch((err) => {
      renderError(err);
    });
}

function renderLoading() {
  const container = document.getElementById("question-list");
  if (!container) return;
  container.innerHTML = '<div class="placeholder">Loading questions…</div>';
}

function renderError(err) {
  const container = document.getElementById("question-list");
  if (!container) return;
  container.innerHTML =
    '<div class="placeholder">Failed to load questions. Check that you are serving these files over HTTP, not opening the HTML directly from file system.</div>';
  console.error(err);
}

function renderQuestions(category, questions, searchTerm) {
  const container = document.getElementById("question-list");
  if (!container) return;

  let filtered = questions;
  const prioritySelect = document.getElementById("priority-filter");
  const priorityValue = prioritySelect ? prioritySelect.value : "all";
  const mustList = mustDoByCategory[category.id] || [];

  const term = (searchTerm || "").trim().toLowerCase();
  if (term) {
    filtered = questions.filter((q) => {
      const haystack = (
        q.id +
        " " +
        q.title +
        " " +
        (q.problemMarkdown || "") +
        " " +
        (q.answerMarkdown || "")
      ).toLowerCase();
      return haystack.includes(term);
    });
  }

  if (priorityValue === "must" && mustList.length) {
    filtered = filtered.filter((q) => mustList.includes(q.id));
  }

  if (!filtered.length) {
    container.innerHTML =
      '<div class="no-results">No questions match your search in this topic.</div>';
    return;
  }

  const state = categoryState[category.id] || {};
  const introMarkdown = state.introMarkdown || "";

  container.innerHTML = "";

  if (introMarkdown) {
    const introCard = document.createElement("article");
    introCard.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";

    const titleSpan = document.createElement("div");
    titleSpan.className = "question-title";
    titleSpan.textContent = "Overall topic explanation";

    header.appendChild(titleSpan);

    const introButton = document.createElement("button");
    introButton.className = "answer-toggle";
    introButton.textContent = "Show overall explanation";

    const introDiv = document.createElement("div");
    introDiv.className = "question-answer md";
    introDiv.hidden = true;
    introDiv.innerHTML = simpleMarkdownToHtml(introMarkdown);

    introButton.addEventListener("click", () => {
      const nowHidden = !introDiv.hidden;
      if (nowHidden) {
        introDiv.hidden = true;
        introButton.classList.remove("open");
        introButton.textContent = "Show overall explanation";
      } else {
        introDiv.hidden = false;
        introButton.classList.add("open");
        introButton.textContent = "Hide overall explanation";
      }
    });

    introCard.appendChild(header);
    introCard.appendChild(introButton);
    introCard.appendChild(introDiv);
    container.appendChild(introCard);
  }

  const nodes = filtered.map((q) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";

    const idSpan = document.createElement("div");
    idSpan.className = "question-id";
    idSpan.textContent = q.id;

    const titleSpan = document.createElement("div");
    titleSpan.className = "question-title";
    titleSpan.textContent = q.title;

    const isMust =
      mustList.length && mustList.includes(q.id);
    let badgeSpan = null;
    if (isMust) {
      badgeSpan = document.createElement("div");
      badgeSpan.className = "badge-high-priority";
      badgeSpan.textContent = "High priority";
    }

    header.appendChild(idSpan);
    header.appendChild(titleSpan);
    if (badgeSpan) {
      header.appendChild(badgeSpan);
    }

    const problemDiv = document.createElement("div");
    problemDiv.className = "question-problem md";
    const problemHtml = simpleMarkdownToHtml(q.problemMarkdown || "");
    problemDiv.innerHTML = problemHtml;

    const answerButton = document.createElement("button");
    answerButton.className = "answer-toggle";
    answerButton.textContent = "Show answer";

    const answerDiv = document.createElement("div");
    answerDiv.className = "question-answer md";
    answerDiv.hidden = true;
    const answerHtml = simpleMarkdownToHtml(q.answerMarkdown || "");
    answerDiv.innerHTML = answerHtml;

    const explainButton = document.createElement("button");
    explainButton.className = "answer-toggle";
    explainButton.textContent = "Show explanation";

    const explainDiv = document.createElement("div");
    explainDiv.className = "question-answer md";
    explainDiv.hidden = true;

    const questionExplainButton = document.createElement("button");
    questionExplainButton.className = "answer-toggle";
    questionExplainButton.textContent = "Show question explanation";

    const questionExplainDiv = document.createElement("div");
    questionExplainDiv.className = "question-answer md";
    questionExplainDiv.hidden = true;

    answerButton.addEventListener("click", () => {
      const nowHidden = !answerDiv.hidden;
      if (nowHidden) {
        answerDiv.hidden = true;
        answerButton.classList.remove("open");
        answerButton.textContent = "Show answer";
      } else {
        answerDiv.hidden = false;
        answerButton.classList.add("open");
        answerButton.textContent = "Hide answer";
      }
    });

    explainButton.addEventListener("click", () => {
      const nowHidden = !explainDiv.hidden;
      if (nowHidden) {
        explainDiv.hidden = true;
        explainButton.classList.remove("open");
        explainButton.textContent = "Show explanation";
      } else {
        if (!explainDiv.dataset.loaded) {
          explainDiv.innerHTML = simpleMarkdownToHtml("Loading explanation…");
          loadExplanationsForCategory(category)
            .then((byQuestionId) => {
              const fromFile = byQuestionId[q.id];
              const explanationMarkdown =
                fromFile || buildExplanationMarkdownFromCode(q.codeSnippet || "");
              const explanationHtml = simpleMarkdownToHtml(explanationMarkdown);
              explainDiv.innerHTML = explanationHtml;
              explainDiv.dataset.loaded = "1";
            })
            .catch(() => {
              const fallback = buildExplanationMarkdownFromCode(q.codeSnippet || "");
              const fallbackHtml = simpleMarkdownToHtml(fallback);
              explainDiv.innerHTML = fallbackHtml;
              explainDiv.dataset.loaded = "1";
            });
        }
        explainDiv.hidden = false;
        explainButton.classList.add("open");
        explainButton.textContent = "Hide explanation";
      }
    });

    questionExplainButton.addEventListener("click", () => {
      const nowHidden = !questionExplainDiv.hidden;
      if (nowHidden) {
        questionExplainDiv.hidden = true;
        questionExplainButton.classList.remove("open");
        questionExplainButton.textContent = "Show question explanation";
      } else {
        if (!questionExplainDiv.dataset.loaded) {
          questionExplainDiv.innerHTML = simpleMarkdownToHtml(
            "Loading question explanation…"
          );
          loadQuestionExplanationsForCategory(category)
            .then((byQuestionId) => {
              const fromFile = byQuestionId[q.id];
              const explanationMarkdown =
                fromFile || "No question explanation available for this question.";
              const explanationHtml = simpleMarkdownToHtml(explanationMarkdown);
              questionExplainDiv.innerHTML = explanationHtml;
              questionExplainDiv.dataset.loaded = "1";
            })
            .catch(() => {
              const fallbackHtml = simpleMarkdownToHtml(
                "No question explanation available for this question."
              );
              questionExplainDiv.innerHTML = fallbackHtml;
              questionExplainDiv.dataset.loaded = "1";
            });
        }
        questionExplainDiv.hidden = false;
        questionExplainButton.classList.add("open");
        questionExplainButton.textContent = "Hide question explanation";
      }
    });

    card.appendChild(header);
    card.appendChild(problemDiv);
    card.appendChild(answerButton);
    card.appendChild(explainButton);
    card.appendChild(questionExplainButton);
    card.appendChild(answerDiv);
    card.appendChild(explainDiv);
    card.appendChild(questionExplainDiv);
    return card;
  });

  nodes.forEach((n) => container.appendChild(n));
}

function renderGlobalSearchResults(results, searchTerm) {
  const container = document.getElementById("question-list");
  if (!container) return;

  const term = (searchTerm || "").trim();
  if (!term) {
    container.innerHTML =
      '<div class="placeholder">Type to search questions across all topics.</div>';
    return;
  }

  if (!results.length) {
    container.innerHTML =
      '<div class="no-results">No questions match your search in any topic.</div>';
    return;
  }

  const nodes = results.map((entry) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";

    const idSpan = document.createElement("div");
    idSpan.className = "question-id";
    idSpan.textContent = entry.question.id;

    const titleSpan = document.createElement("div");
    titleSpan.className = "question-title";
    titleSpan.textContent = entry.question.title;

    const mustList = mustDoByCategory[entry.categoryId] || [];
    const isMust =
      mustList.length && mustList.includes(entry.question.id);
    let badgeSpan = null;
    if (isMust) {
      badgeSpan = document.createElement("div");
      badgeSpan.className = "badge-high-priority";
      badgeSpan.textContent = "High priority";
    }

    const catSpan = document.createElement("div");
    catSpan.className = "question-meta";
    catSpan.textContent = entry.categoryLabel;

    header.appendChild(idSpan);
    header.appendChild(titleSpan);
    if (badgeSpan) {
      header.appendChild(badgeSpan);
    }

    const problemDiv = document.createElement("div");
    problemDiv.className = "question-problem md";
    const problemHtml = simpleMarkdownToHtml(entry.question.problemMarkdown || "");
    problemDiv.innerHTML = problemHtml;

    const answerButton = document.createElement("button");
    answerButton.className = "answer-toggle";
    answerButton.textContent = "Show answer";

    const answerDiv = document.createElement("div");
    answerDiv.className = "question-answer md";
    answerDiv.hidden = true;
    const answerHtml = simpleMarkdownToHtml(entry.question.answerMarkdown || "");
    answerDiv.innerHTML = answerHtml;

    const explainButton = document.createElement("button");
    explainButton.className = "answer-toggle";
    explainButton.textContent = "Show explanation";

    const explainDiv = document.createElement("div");
    explainDiv.className = "question-answer md";
    explainDiv.hidden = true;

    const questionExplainButton = document.createElement("button");
    questionExplainButton.className = "answer-toggle";
    questionExplainButton.textContent = "Show question explanation";

    const questionExplainDiv = document.createElement("div");
    questionExplainDiv.className = "question-answer md";
    questionExplainDiv.hidden = true;

    answerButton.addEventListener("click", () => {
      const nowHidden = !answerDiv.hidden;
      if (nowHidden) {
        answerDiv.hidden = true;
        answerButton.classList.remove("open");
        answerButton.textContent = "Show answer";
      } else {
        answerDiv.hidden = false;
        answerButton.classList.add("open");
        answerButton.textContent = "Hide answer";
      }
    });

    explainButton.addEventListener("click", () => {
      const nowHidden = !explainDiv.hidden;
      if (nowHidden) {
        explainDiv.hidden = true;
        explainButton.classList.remove("open");
        explainButton.textContent = "Show explanation";
      } else {
        if (!explainDiv.dataset.loaded) {
          explainDiv.innerHTML = simpleMarkdownToHtml("Loading explanation…");
          const category = categories.find((c) => c.id === entry.categoryId);
          loadExplanationsForCategory(category)
            .then((byQuestionId) => {
              const fromFile = byQuestionId[entry.question.id];
              const explanationMarkdown =
                fromFile ||
                buildExplanationMarkdownFromCode(entry.question.codeSnippet || "");
              const explanationHtml = simpleMarkdownToHtml(explanationMarkdown);
              explainDiv.innerHTML = explanationHtml;
              explainDiv.dataset.loaded = "1";
            })
            .catch(() => {
              const fallback = buildExplanationMarkdownFromCode(
                entry.question.codeSnippet || ""
              );
              const fallbackHtml = simpleMarkdownToHtml(fallback);
              explainDiv.innerHTML = fallbackHtml;
              explainDiv.dataset.loaded = "1";
            });
        }
        explainDiv.hidden = false;
        explainButton.classList.add("open");
        explainButton.textContent = "Hide explanation";
      }
    });

    questionExplainButton.addEventListener("click", () => {
      const nowHidden = !questionExplainDiv.hidden;
      if (nowHidden) {
        questionExplainDiv.hidden = true;
        questionExplainButton.classList.remove("open");
        questionExplainButton.textContent = "Show question explanation";
      } else {
        if (!questionExplainDiv.dataset.loaded) {
          questionExplainDiv.innerHTML = simpleMarkdownToHtml(
            "Loading question explanation…"
          );
          const category = categories.find((c) => c.id === entry.categoryId);
          loadQuestionExplanationsForCategory(category)
            .then((byQuestionId) => {
              const fromFile = byQuestionId[entry.question.id];
              const explanationMarkdown =
                fromFile || "No question explanation available for this question.";
              const explanationHtml = simpleMarkdownToHtml(explanationMarkdown);
              questionExplainDiv.innerHTML = explanationHtml;
              questionExplainDiv.dataset.loaded = "1";
            })
            .catch(() => {
              const fallbackHtml = simpleMarkdownToHtml(
                "No question explanation available for this question."
              );
              questionExplainDiv.innerHTML = fallbackHtml;
              questionExplainDiv.dataset.loaded = "1";
            });
        }
        questionExplainDiv.hidden = false;
        questionExplainButton.classList.add("open");
        questionExplainButton.textContent = "Hide question explanation";
      }
    });

    card.appendChild(header);
    card.appendChild(catSpan);
    card.appendChild(problemDiv);
    card.appendChild(answerButton);
    card.appendChild(explainButton);
    card.appendChild(questionExplainButton);
    card.appendChild(answerDiv);
    card.appendChild(explainDiv);
    card.appendChild(questionExplainDiv);
    return card;
  });

  container.innerHTML = "";
  nodes.forEach((n) => container.appendChild(n));
}

function updateCategoryCounts() {
  const buttons = document.querySelectorAll(".category-item");
  buttons.forEach((btn) => {
    const id = btn.dataset.categoryId;
    const countSpan = btn.querySelector(".category-count");
    const state = categoryState[id];
    if (countSpan) {
      countSpan.textContent = state && state.questions ? state.questions.length : "";
    }
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const scopeSelect = document.getElementById("search-scope");
  const prioritySelect = document.getElementById("priority-filter");
  if (!searchInput || !scopeSelect) return;

  function runSearch() {
    const scope = scopeSelect.value;
    const term = searchInput.value || "";

    if (scope === "topic") {
      const activeButton = document.querySelector(".category-item.active");
      if (!activeButton) {
        const container = document.getElementById("question-list");
        if (container && !term.trim()) {
          container.innerHTML =
            '<div class="placeholder">Select a topic from the left, then search inside it.</div>';
        }
        return;
      }
      const categoryId = activeButton.dataset.categoryId;
      const cat = categories.find((c) => c.id === categoryId);
      if (!cat) return;
      const state = categoryState[categoryId];
      if (!state || !state.questions) {
        ensureCategoryLoaded(cat, term);
        return;
      }
      renderQuestions(cat, state.questions, term);
    } else {
      const promises = categories.map((cat) => loadQuestionsForCategory(cat).then((qs) => ({
        categoryId: cat.id,
        categoryLabel: cat.label,
        questions: qs,
      })));

      renderLoading();

      Promise.all(promises)
        .then((all) => {
          const results = [];
          const searchLower = term.toLowerCase();
          const prioritySelect = document.getElementById("priority-filter");
          const priorityValue = prioritySelect ? prioritySelect.value : "all";

          all.forEach((entry) => {
            const mustList = mustDoByCategory[entry.categoryId] || [];
            entry.questions.forEach((q) => {
              const haystack = (
                q.id +
                " " +
                q.title +
                " " +
                (q.problemMarkdown || "") +
                " " +
                (q.answerMarkdown || "")
              ).toLowerCase();
              const matchesSearch = !searchLower || haystack.includes(searchLower);
              const matchesPriority =
                priorityValue !== "must" || (mustList.length && mustList.includes(q.id));
              if (matchesSearch && matchesPriority) {
                results.push({
                  categoryId: entry.categoryId,
                  categoryLabel: entry.categoryLabel,
                  question: q,
                });
              }
            });
          });
          renderGlobalSearchResults(results, term);
        })
        .catch((err) => {
          renderError(err);
        });
    }
  }

  searchInput.addEventListener("input", runSearch);
  scopeSelect.addEventListener("change", runSearch);
  if (prioritySelect) {
    prioritySelect.addEventListener("change", runSearch);
  }
}

function setupSidebarToggle() {
  const root = document.querySelector(".app-root");
  const button = document.getElementById("toggle-sidebar");
  if (!root || !button) return;

  function updateLabel() {
    const hidden = root.classList.contains("sidebar-hidden");
    button.textContent = hidden ? "Show topics" : "Hide topics";
  }

  button.addEventListener("click", () => {
    root.classList.toggle("sidebar-hidden");
    updateLabel();
  });

  updateLabel();
}

document.addEventListener("DOMContentLoaded", () => {
  createCategoryList();
  setupSearch();
  setupSidebarToggle();
});
