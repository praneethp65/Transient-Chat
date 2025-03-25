# Transient-Chat

## Overview

Transient-Chat is a lightweight, real-time chat application that leverages WebSocket for live communication. It enables users to create or join chat rooms using unique room codes, allowing seamless, room-based messaging.

## Features

- **Real-Time Messaging:** Utilizes WebSocket to instantly broadcast messages within a chat room.
- **Room Management:** Create or join rooms using unique codes.
- **Responsive Interface:** Built with React, offering a clean and intuitive user experience.
- **Utility Functions:** Includes features like room code generation and easy copy-to-clipboard for room sharing.

## Technology Stack

- **Server:**  
  - **Language:** TypeScript  
  - **Framework:** Node.js with the `ws` library for WebSocket support  
- **Client:**  
  - **Library:** React  
  - **Styling:** Tailwind CSS  
  - **Routing:** React Router

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Server Setup

1. Navigate to the server directory (or the root if it's a monorepo).
2. Install the dependencies:
   ```bash
   npm install
