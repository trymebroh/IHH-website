# Claude.md - Project Instructions and Guardrails

## Workflow

First, think through the problem. Read the codebase and write a plan in tasks/todo.md
The plan should be a checklist of todo items.
Check in with me before starting work—I'll verify the plan.
Then, complete the todos one by one, marking them off as you go.
At every step, give me a high-level explanation of what you changed.
Keep every change simple and minimal. Avoid big rewrites.
At the end, add a review section in todo.md summarizing the changes.

## Session Notes

Update `session-notes/YYYY-MM-DD.md` at the end of each working session:
- **Completed**: What was accomplished this session
- **Pending**: What remains to be done
- **Notes**: Any relevant context for future sessions

## Model Selection

**Default Model:** claude-sonnet-4-5-20250929 (Sonnet 4.5)

Use `/model` to switch models based on the task phase:

| Phase | Recommended Model | Rationale |
|-------|-------------------|-----------|
| **Planning & Architecture** | Opus 4.5 | Complex reasoning, system design, trade-off analysis |
| **Code Implementation** | Sonnet 4.5 | Best balance of speed, cost, and code quality |
| **Bug Fixes & Small Changes** | Sonnet 4.5 or Haiku 3.5 | Quick iterations, straightforward tasks |
| **Code Review & Refactoring** | Opus 4.5 | Deep understanding of patterns, edge cases |
| **Documentation** | Sonnet 4.5 | Clear writing with good context understanding |
| **Quick Questions & Lookups** | Haiku 3.5 | Fast responses, lower cost |

**When to upgrade to Opus 4.5:**
- Designing new features or systems from scratch
- Debugging complex, multi-file issues
- Security-sensitive code review
- Performance optimization requiring deep analysis

**When Haiku 3.5 is sufficient:**
- Simple file edits
- Running commands and scripts
- Straightforward Q&A about the codebase
