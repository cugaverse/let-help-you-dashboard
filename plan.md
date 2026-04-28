## Plan for Culture Games Africa Platform:

**1. Project Setup:**
   - Initialize a new project for "Culture Games Africa" for CUGA Media.
   - Focus on building a high-performance, inclusive, and gamified web platform.

**2. Frontend Development (Delegate to frontend_engineer):**
   - **UI/UX Implementation:**
     - Hero Section: Visually engaging content showcasing African heritage, monuments, and museums.
     - The Archive (Blog/Feed): User browsing and uploading interface for stories, photos, and videos.
     - Virtual Map/Museums: Interactive map interface for exploring locations.
     - Membership System UI: Registration, login forms, and "Culture Dashboard" for users.
     - Leaderboard Display: Frontend for displaying rankings.
   - **Accessibility (WCAG 2.1 Compliance):**
     - Implement high contrast ratios.
     - Ensure screen-reader compatibility with ARIA labels.
     - Enable keyboard-only navigation.
   - **Multilingual Engine:**
     - Develop a language-switching toggle (English, French, Swahili, Arabic).
     - Ensure dynamic UI updates across all languages.
   - **Adaptive UI:**
     - Optimize buttons and navigation for users with motor disabilities (large touch targets).
     - Prepare for voice-command integration.
   - **Visual Style:**
     - Modern, vibrant, and prestigious aesthetic.
     - Implement color palette: Earthy tones (Terracotta, Ochre, Deep Greens) paired with clean, modern White/Slate for readability.
     - Apply typography: Bold, geometric headers paired with highly legible sans-serif body text.
   - **Responsiveness:**
     - Mobile-first design approach.
     - Ensure optimal performance on various devices.
   - **SEO:**
     - Integrate schema markup for cultural and historical content.
   - **Workflow Note:** Frontend Engineer must run `generate_images_bulk` before writing any files.

**3. Backend & Database Development (Delegate to supabase_engineer):**
   - **Database Schema Design:**
     - Users table (for membership system: registration/login, Culture Dashboard data).
     - Content table (for storing user-submitted stories, photos, videos).
     - Activity Ledger table (to track user actions and awarded "Culture Points").
     - Heritage Quiz modules table (for "Learning" gamification).
   - **Membership System:**
     - Implement secure user registration and login.
     - Develop the backend logic for the "Culture Dashboard".
   - **Gamification Logic (Culture Points System):**
     - Implement backend logic to award points for:
       - Original story submissions (+100 Points).
       - Comments or shares (+10 Points).
       - Completing "Heritage Quiz" modules (+25 Points).
     - Implement the Leaderboard ranking system logic.
   - **CMS for CUGA Media Admins:**
     - Develop an interface or backend tools for content moderation and verification of user-submitted stories.
   - **API Endpoints:**
     - Create necessary API endpoints for the frontend to interact with the backend (e.g., fetching content, user data, submitting content, commenting, quiz completion).
   - **Edge Functions (if needed):** For complex business logic like point awarding or moderation workflows.

**4. Orchestration and Validation:**
   - **Initial Task:** Create this plan.
   - **Agent Assignment:**
     - `frontend_engineer` for all UI/UX, accessibility, responsiveness, and visual implementation.
     - `supabase_engineer` for database setup, backend logic, authentication, CMS, and gamification mechanics.
   - **Workflow:** Agents will work in parallel or sequence as needed, with frontend integrating with backend APIs.
   - **Final Step:** After all development is complete, use `validate_build` to verify the entire project.
