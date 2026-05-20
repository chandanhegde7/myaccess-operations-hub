# 🚨 Task 6 — Provisioning Failures

## Objective
Validate provisioning failures and determine whether retries succeeded.

---

## Schedule
- 11:00 AM
- 3:00 PM

---

## Query 6A

```sql
<Query from monitoring sheet>
```

---

## Required Columns
- Action
- Recipient
- Sources

---

## Validation Flow

```text
Failure Found?
   ↓
Run Retry Query
   ↓
Retry Passed?
 ├── YES → Update tracker
 └── NO → Raise Jira
```

---

## Retry Query

```sql
created:[now-1d TO now]
```

---

## Common Error

### OneTrust Error
Ask user to login through JumpCloud.

---

## Escalation Steps
1. Update tracker
2. Post Slack update
3. Raise Jira if unresolved