
# Setup

#### 1. Fork the Repo
Fork the [microgen repo](https://github.com/filecoin-project/microgen-tina) from GitHub.

#### 2. Setup Tina Cloud to manage the CMS
- [Register](https://app.tina.io/register) for a new Tina Cloud account.
- Go to [projects](https://app.tina.io/projects/choose) and create a new Custom Project.
- Follow the steps to select your forked repo. (add http://localhost:3000 as a site URL)
- Go to project details for your new project and copy the client ID.

#### 3. Setup Cloudinary to host images
- [Register](https://cloudinary.com/users/register/free) for a new Cloudinary account
- Go to your Cloudinary Dashboard and copy these values.
```
    Cloud Name: xxxxx  
    API Key: xxxxx  
    API Secret: xxxxx
```

#### 4. Setup a Vercel Account as your staging site
- [Register](https://vercel.com/signup) for a new Vercel account.
- Create a new project by importing your GitHub repo, use Next.js preset and don't adjust build settings.
- Add environment variables using data from Cloudinary and Tina Cloud.
```
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxxxx
    NEXT_PUBLIC_CLOUDINARY_API_KEY=xxxxx
    CLOUDINARY_API_SECRET=xxxxx
    NEXT_PUBLIC_TINA_CLIENT_ID=xxxxx
```
- Press the Deploy button. Once the build is complete visit the Vercel url and confirm the site built.

#### 5. Add the Vercel URL to Tina Cloud
Under the Tina Cloud configuration for your project add the Vercel URL to Site URLS. Tina will only allow edits from site domains listed here. Go back to your Vercel site and add /admin to the end of your URL. You will be asked to login to Tina Cloud. After loging in click the pencil in the lower left and confirm you can make and save edits.


#### Setup a Fleek production site
You now have an editable staging site on Vercel. When you're ready you can setup a production site on Fleek running off the "production" branch of your project.


## Tips and Tricks

If you edit environment variables remember you must redeploy your project on Vercel for the new variables to take effect.
