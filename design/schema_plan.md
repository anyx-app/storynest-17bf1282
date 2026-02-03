# Schema Plan - StoryNest

## Overview
StoryNest requires a relational database to manage users, interactive stories, questions, and progress tracking. We will use Supabase (PostgreSQL) for this.

## Tables

### 1. `profiles`
Extends the default `auth.users` table to store application-specific user data.
- **id** (uuid, PK): References `auth.users.id`.
- **username** (text): Display name for the user.
- **avatar_url** (text): URL to profile picture.
- **role** (text): User role ('student', 'teacher', 'parent'). Default 'student'.
- **created_at** (timestamptz): Timestamp of creation.
- **updated_at** (timestamptz): Timestamp of last update.

### 2. `stories`
Stores the reading material.
- **id** (uuid, PK): Unique identifier.
- **title** (text): Title of the story.
- **content** (text): The full text content of the story.
- **summary** (text): Brief description.
- **cover_image_url** (text): Visual representation.
- **audio_url** (text): URL to the read-along audio file.
- **difficulty_level** (text): 'beginner', 'intermediate', 'advanced'.
- **reading_time_minutes** (integer): Estimated reading time.
- **created_at** (timestamptz).

### 3. `questions`
Interactive elements associated with stories.
- **id** (uuid, PK): Unique identifier.
- **story_id** (uuid, FK): References `stories.id`.
- **question_text** (text): The question being asked.
- **question_type** (text): 'multiple_choice', 'vocabulary', 'comprehension'.
- **options** (jsonb): Array of possible answers (for multiple choice).
- **correct_answer** (text): The correct answer key or text.
- **order_index** (integer): To sequence questions within a story.

### 4. `user_progress`
Tracks a user's interaction with specific stories.
- **id** (uuid, PK): Unique identifier.
- **user_id** (uuid, FK): References `profiles.id`.
- **story_id** (uuid, FK): References `stories.id`.
- **status** (text): 'not_started', 'in_progress', 'completed'.
- **score** (integer): Score achieved on associated questions (0-100).
- **last_accessed_at** (timestamptz): When the user last interacted.
- **completed_at** (timestamptz): When the story was finished.

### 5. `achievements`
Gamification elements.
- **id** (uuid, PK).
- **name** (text): Display name (e.g., "Bookworm").
- **description** (text): How to earn it.
- **icon_url** (text).
- **criteria** (jsonb): Logic for awarding (e.g., { "stories_completed": 5 }).

### 6. `user_achievements`
Linking users to earned achievements.
- **id** (uuid, PK).
- **user_id** (uuid, FK): References `profiles.id`.
- **achievement_id** (uuid, FK): References `achievements.id`.
- **earned_at** (timestamptz).

## Relationships
- `profiles` 1:N `user_progress`
- `stories` 1:N `questions`
- `stories` 1:N `user_progress`
- `profiles` 1:N `user_achievements`
- `achievements` 1:N `user_achievements`

## Security Policies (RLS)
- **profiles**: Users can read/edit their own profile. Public can read usernames/avatars if needed.
- **stories**: Public read access (or authenticated only). Admin write access.
- **questions**: Public read access (or authenticated only). Admin write access.
- **user_progress**: Users can CRUD their own progress.
- **achievements**: Public read access.
- **user_achievements**: Users can read their own. System inserts records.
