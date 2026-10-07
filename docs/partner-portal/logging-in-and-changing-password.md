---
hide_title: true
title: Logging in and Changing Password
---

import { DocPage, Hero, SectionHeading, Card, List, Li, Steps, ImgCard, ImgGrid } from '@site/src/components/DocKit';

<DocPage>
<Hero title="Logging in &" accent="Changing Password" subtitle="Sign in to the OpenRemit Partner Portal with your username, password and an email OTP, and set your own password on first login." />
<SectionHeading>Sign In</SectionHeading>
<Card title="Login Screen">
<Steps items={[
  <>Enter your <strong>Username</strong>, the unique username assigned to your partner user.</>,
  <>Enter your <strong>Password</strong>, either the temporary password emailed to you or the one you set after your first login.</>,
  <>Click <strong>Sign In</strong>. A one-time password (OTP) is sent to your registered email address.</>,
]} />
</Card>
<ImgCard src="/img/PP/login.png" alt="Partner Portal — Login Screen" label="Fig. 1" />
<SectionHeading>Two-Factor Authentication</SectionHeading>
<Card title="OTP Verification">
<List>
  <Li>Enter the OTP code received by email.</Li>
  <Li>Optionally tick <strong>Trust this device</strong> to skip OTP verification on this device for future logins.</Li>
  <Li>Click <strong>Verify Code</strong> to continue, or <strong>Back to Login</strong> to start again.</Li>
</List>
</Card>
<ImgCard src="/img/PP/otp.png" alt="Partner Portal — OTP Verification" label="Fig. 2" />
<SectionHeading>First Login & Forgotten Password</SectionHeading>
<Card amber title="Where partner users come from">
<List>
  <Li>Partner user accounts are created from the <a href="../back-office/partners">Back Office → Partners</a> screen.</Li>
  <Li>A temporary password is emailed to the user when the account is created.</Li>
  <Li>On first login the user must set a new password: 8–15 characters with an uppercase letter, a lowercase letter, a number and a special character.</Li>
  <Li>If you forget your password, click <strong>Forgot password?</strong> on the login screen to start recovery.</Li>
</List>
</Card>
<ImgCard src="/img/PP/first-login.png" alt="Partner Portal — First Login Password Reset" label="Fig. 3" />
<SectionHeading>Navigation</SectionHeading>
<Card title="Main Menu">
<List>
  <Li>After login, users with maker rights land on the <a href="./dashboard">Dashboard</a>.</Li>
  <Li>The left-side menu gives access to <a href="./transactions">Transactions</a>, <a href="./failed-transactions">Failed Transactions</a>, <a href="./instant-status-inquiry">Instant Status Inquiry</a>, <a href="./amendment">Amendment</a>, <a href="./cancellation">Cancellation</a>, Transactions Maker Inbox, <a href="./file-upload">File Upload</a>, <a href="./imd-list">IMD List</a>, <a href="./partner-balance">Partner Balance</a> and <a href="./audit-logs">Audit Logs</a>.</Li>
  <Li>Users with checker rights see the <a href="./checker-inbox">Transactions Checker Inbox</a>.</Li>
</List>
</Card>
<ImgCard src="/img/PP/home.png" alt="Partner Portal — Main Menu" label="Fig. 4" />
</DocPage>
