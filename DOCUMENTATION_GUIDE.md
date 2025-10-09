# 📖 Documentation Guide - Where to Look

A quick reference for finding the right documentation based on your needs.

## 🎯 I Want To...

### Learn What This Project Is
→ **[README.md](README.md)**
- Project overview and features
- Available quizzes
- Quick start guide
- Technology stack

### Add a New Quiz
→ **[CONTRIBUTING.md](CONTRIBUTING.md)**
- Step-by-step quiz creation
- Question format requirements
- Quality checklist
- Testing and validation

### Understand the Architecture
→ **[.github/copilot-instructions.md](.github/copilot-instructions.md)**
- Shared engine architecture
- File organization philosophy
- Integration points
- Design decisions and "why"

### Use AI Coding Assistants
→ **[.github/copilot-instructions.md](.github/copilot-instructions.md)**
- Coding conventions
- Common pitfalls to avoid
- Project-specific patterns
- Critical contracts

### Troubleshoot Issues
→ **[CONTRIBUTING.md](CONTRIBUTING.md)** → "Common Issues" section
- Quiz doesn't load
- Options not highlighting
- Correct answer not recognized
- File corruption

### Validate Quiz Answers
→ **[validation/README.md](validation/README.md)**
- Validation script structure
- Running validations
- Creating new validators

### Test Locally Before Deployment
→ **[TESTING.md](TESTING.md)** or **[TESTING_QUICK.md](TESTING_QUICK.md)**
- Local server setup
- Automated testing script
- Manual testing checklist
- Browser compatibility testing
- Pre-deployment checklist

### Create a Specific Quiz
→ **[quizzes/template/README.md](quizzes/template/README.md)**
- Template usage
- Step-by-step instructions
- Customization options

## 📚 Documentation Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│                      README.md                           │
│              (START HERE - Overview)                     │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────────┐
│ .github/     │ │CONTRIBUTING  │ │ quizzes/         │
│ copilot-     │ │.md           │ │ */README.md      │
│ instructions │ │              │ │                  │
│ .md          │ │ (How-to)     │ │ (Quiz-specific)  │
│              │ │              │ │                  │
│ (Why & What) │ │              │ │                  │
└──────────────┘ └──────────────┘ └──────────────────┘
        │              │              │
        └──────────────┼──────────────┘
                       │
                       ▼
        ┌──────────────────────────┐
        │   validation/README.md    │
        │   (Testing & Validation)  │
        └──────────────────────────┘
```

## 🤖 For Different Audiences

### New Contributors (First Time)
1. Read: **README.md** → Understand the project
2. Read: **CONTRIBUTING.md** → Learn how to contribute
3. Copy: **quizzes/template/** → Start creating
4. Reference: **quizzes/template/README.md** → Follow steps

### AI Coding Agents (GitHub Copilot, etc.)
1. Read: **`.github/copilot-instructions.md`** → Full context
2. Reference: **CONTRIBUTING.md** → Human conventions
3. Apply: Patterns and anti-patterns learned

### Experienced Developers
1. Skim: **README.md** → Quick overview
2. Study: **`.github/copilot-instructions.md`** → Architecture
3. Reference: **CONTRIBUTING.md** → Specific workflows

### Maintainers
1. Update: **`.github/copilot-instructions.md`** → When architecture changes
2. Update: **CONTRIBUTING.md** → When workflows change
3. Update: **README.md** → When features are added
4. Review: All docs quarterly for accuracy

## 📊 Documentation Matrix

| Document | Length | Audience | Focus | Update Frequency |
|----------|--------|----------|-------|------------------|
| README.md | 200 lines | Everyone | Overview | When features added |
| .github/copilot-instructions.md | 205 lines | AI agents | Architecture | When patterns change |
| CONTRIBUTING.md | 273 lines | Contributors | How-to | When workflow changes |
| quizzes/template/README.md | ~100 lines | Quiz creators | Step-by-step | Rarely |
| validation/README.md | 112 lines | Validators | Testing | Rarely |
| DOCUMENTATION_SUMMARY.md | ~200 lines | Maintainers | Meta | After doc updates |

## 🔍 Quick Search Guide

Looking for information about...

| Topic | Document | Section |
|-------|----------|---------|
| Adding a quiz | CONTRIBUTING.md | "Your First Quiz" |
| Question format | CONTRIBUTING.md | "Question Format" |
| File structure | .github/copilot-instructions.md | "Modular Quiz Structure" |
| Coding style | .github/copilot-instructions.md | "Coding Conventions" |
| Common errors | CONTRIBUTING.md | "Common Issues" |
| Validation | validation/README.md | Full document |
| Architecture | .github/copilot-instructions.md | "Architecture & Key Patterns" |
| Technology stack | README.md | "Technology Stack" |
| Deployment | CONTRIBUTING.md | "Deployment" |
| Best practices | CONTRIBUTING.md | "Best Practices" |

## 🎨 Visual Learning

Prefer diagrams? Check:
- **STRUCTURE_DIAGRAM.txt** - ASCII file structure
- **FIX_REPORT.md** - Before/after comparison diagrams
- **REFACTORING_COMPLETE.md** - Architecture evolution

## 💡 Pro Tips

### For Fast Answers
1. Use your editor's search: `Ctrl+Shift+F` / `Cmd+Shift+F`
2. Search for keywords across all `.md` files
3. Check examples in existing quizzes

### For Deep Understanding
1. Read `.github/copilot-instructions.md` completely
2. Study both existing quizzes (data-structures, physics-chemistry)
3. Examine the quiz engine source (`assets/js/quiz-engine.js`)

### For Quick Reference
1. Bookmark this guide
2. Keep CONTRIBUTING.md open while creating quizzes
3. Reference validation/README.md when testing

## 🔄 Documentation Lifecycle

```
New Feature Added
       ↓
Update .github/copilot-instructions.md (architecture)
       ↓
Update CONTRIBUTING.md (workflow)
       ↓
Update README.md (user-facing)
       ↓
Update DOCUMENTATION_SUMMARY.md (meta)
       ↓
Review for consistency
       ↓
Commit all changes together
```

## 📞 Still Can't Find What You Need?

1. **Search all docs**: Use GitHub search or local grep
2. **Check examples**: Look at existing quizzes
3. **Read the code**: Source is well-commented
4. **Ask**: Open an issue with the `question` label

---

**Remember**: Documentation is living - if something is unclear or missing, please contribute improvements! 🙌
