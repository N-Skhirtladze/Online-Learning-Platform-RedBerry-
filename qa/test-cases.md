# Test Cases

## TC - 001: Signup first step with valid email

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button

### Expected Result
User proceeds to the next signup step successfully.

----------------------------------------------------------------

## TC - 002: Signup first step with invalid email

### Steps
1. Open signup page
2. Enter invalid email
3. Click "Next" button

### Expected Result
Error message appears for email and next step is not available

----------------------------------------------------------------

## TC - 003: Signup first step with empty email

### Steps
1. Open signup page
2. Leave email field empty
3. Click "Next" button

### Expected Result
Validation error appears for email field and next step is not available

----------------------------------------------------------------

## TC - 004: Signup second step with valid password and password confirmation

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Enter valid password confirmation
6. Click "Next" button

### Expected Result
User proceeds to the next signup step successfully.

---------------------------------------------------------------

## TC - 005: Signup second step with invalid password

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter invalid password
5. Enter valid password confirmation
6. Click "Next" button

### Expected Result
Error message appears for password field and next step is not available

----------------------------------------------------------------

## TC - 006: Signup second step with invalid password confirmation

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Enter invalid password confirmation
6. Click "Next" button

### Expected Result
Error message appears for password confirmation and next step is not available

----------------------------------------------------------------

## TC - 007: Signup second step with empty password field

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Leave password field empty
5. Enter valid password confirmation
6. Click "Next" button

### Expected Result
Validation error appears for password field and next step is not available

----------------------------------------------------------------

## TC - 008: Signup second step with empty password confirmation field

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Leave password confirmation field empty
6. Click "Next" button

### Expected Result
Validation error appears for password confirmation field and next step is not available

----------------------------------------------------------------

## TC - 009: Signup third step with valid username and avatar

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Enter valid password confirmation
6. Click "Next" button
7. Enter valid username
8. Upload valid avatar
9. Click "Sign Up" button

### Expected Result
User is successfully registered and redirected to dashboard

----------------------------------------------------------------

## TC - 010: Signup third step with invalid avatar

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Enter valid password confirmation
6. Click "Next" button
7. Enter valid username
8. Upload invalid avatar
9. Click "Sign Up" button

### Expected Result
Error message appears for avatar field and unable to register

----------------------------------------------------------------

## TC - 011: Signup third step with empty username field

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Enter valid password confirmation
6. Click "Next" button
7. Leave empty username field
8. Upload valid avatar
9. Click "Sign Up" button

### Expected Result
Validation error appears for username field and unable to register

## TC - 012: Signup third step with empty avatar field

### Steps
1. Open signup page
2. Enter valid email
3. Click "Next" button
4. Enter valid password
5. Enter valid password confirmation
6. Click "Next" button
7. Enter valid username
8. Leave empty avatar field
9. Click "Sign Up" button

### Expected Result
User is successfully registered and redirected to dashboard
