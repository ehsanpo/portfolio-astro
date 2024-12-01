---
title: "Git Approvers Hover Extension"
date: "2024-11-28T12:58:42+00:00"
status: publish
permalink: vscode-git-approvers
author: Ehsan
type: portfolio
id: 335
agancy: "Telavox"
category:
  - Lab
tag:
  - Javascript
  - Typescript

case_link_url:
  - "https://github.com/ehsanpo/pr-approve"
body_text:
  - ""
client:
  - "Telavox"
tagline:
  - "Shows the PR approvers when hovering over lines of code. "
background_image:
  - "vscode3.png"
logo:
  - "vscodelogo.png"
bilder:
  - "vscode3.png"

port_date:
  - "2024"
---

<h2>Git Approvers Hover Extension</h2>

<h3>Overview</h3>
Git Approvers Hover is a Visual Studio Code extension that shows the PR approvers when hovering over lines of code. It works by leveraging git blame to identify the commit and then fetches the related pull request and its approvals from GitHub.
<br />

<h3>Features</h3>
  <ul>
    <li>Hover over a line of code to see the list of users who approved the corresponding GitHub Pull Request.</li>
    <li>Supports projects with Git repositories linked to GitHub.</li>
 </ul>

<h3>Installation</h3>
<ul>
    <li> Download the .vsix file for the extension. </li>
    <li> Open Visual Studio Code.</li>
    <li> Go to the Extensions view by clicking the Extensions icon in the Activity Bar or pressing Ctrl+Shift+X.</li>
    <li> Click on the three-dot menu (...) in the top-right corner of the Extensions view.</li>
    <li> Select Install from VSIX....</li>
    <li> Browse to and select the downloaded .vsix file.</li>
</ul>

<h3>Usage</h3>
<ul>
    <li>Open a workspace that is part of a Git repository.</li>
    <li> Hover over any line of code in a tracked file.</li>
    <li>If the line corresponds to a commit with an associated GitHub pull request, the extension will display the list of approvers for that PR.</li>
</ul>

<h3>Requirements</h3>
<ul>
 <li>The workspace must be a Git repository.</li>
 <li>The repository must be hosted on GitHub.</li>
 <li>A GitHub API token with appropriate permissions should be set as an environment variable (GITHUB_TOKEN) or configured in the extension.</li>
</ul>

<h3>Setup GitHub API Token</h3>
The extension requires a GitHub API token to fetch pull request information. You can set the token as an environment variable:

- Go to GitHub's Personal Access Token page and generate a new token with the necessary permissions (e.g., repo).

- Set the token as an environment variable:

<pre>export GITHUB_TOKEN=your-token-here</pre>
