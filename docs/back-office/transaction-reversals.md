# Transaction Reversals

## 3. Transaction Reversal:
- Upload a file containing transaction details to reverse already posted transactions.
- The system validates the data, matches it against existing transactions, and processes reversals.

### Required File Columns:
- Original Txn Date (YYYY-MM-DD)
- Txn Rail (1link, RAAST, RTGS)
- Partner (MTO name)
- Txn Amount (numeric)
- CBS Reference (optional)
- Txn Reference (STAN for 1link, MessageId for RAAST, or uniqueId for RTGS)
- Receiver IBAN (PK + 22 digits)
- Receiver Name
![SubAgent](/img/BO/Transactions/reversal.png)