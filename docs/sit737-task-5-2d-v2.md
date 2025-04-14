

**Task 5.2D: Deploying the microservice to the cloud**

| **Task Requirements** |
| --- |

**Overview:**

In this task, we will continue the work from task 5.1P and prepare microservice for production deployment. The goal is to containerize your microservice using Docker and publish it to a private container registry hosted on Google Cloud. This process ensures that your microservice is production-ready and easily deployable in a cloud environment.

**Required Tools:**

![A rainbow colored cloud logo

AI-generated content may be incorrect.](data:image/png;base64...)

| **Google Cloud SDK (gcloud CLI)** | Command-line tool to interact with GCP services |
| --- | --- |
| **Artifact Registry** | Google Cloud container image registry |
| **gcloud auth configure-docker** | Enables Docker to authenticate with GCP’s Artifact Registry |

Additionally, you'll need a Google Cloud account to create and manage your private container registry.

**Deliverables**

The following deliverables are submitted as part of this task:

1. **Setup Google Cloud Account**
2. **Download and Install Google Cloud SDK**
3. **Create a private container registry on Google Cloud**
4. **Authenticate Docker with Google Cloud**
5. **Tag the Docker image for publication**
6. **Push the image to Google Artifact Registry**
7. **Verify the published image by running it from Artifact Registry**

**GitHub Repository: Publicly accessible repository named:**

* Weekly Task Submissions: [sit737-2025-prac5p](https://github.com/seffy/sit737-2025-prac5p)
* Microservice: [sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)

| **Part 1 – Getting Started** |
| --- |

The following step-by-step instructions guide you through the process of preparing, containerising, and publishing the **HireBuddy** microservice. We will set up Google Cloud environment, build and tag your Docker image, push it to Google Artifact Registry, and verify that the image runs successfully from the cloud.

**Step 1: Setup Google Cloud Account**

Before using Google Cloud services, we will need to activate your Google Cloud account. Look for an email from Deakin IT Administrator with instructions on how to set up your GCP account.

Note down your Project ID, as you will need it later for configuring other tools and services.

![A screenshot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

1. Log into [Google Cloud Console](https://console.cloud.google.com/) and sign in using your Deakin email account. Verify that your Project ID appears on the top navigation bar or in your project list.

Additional setup steps provided by Deakin can be found here:

* <https://deakin365.sharepoint.com/sites/SITCloudGuide/SitePages/Getting-Started-with-GCP.aspx>

**Step 2: Download and Install Google Cloud SDK (macOS ARM (Apple Silicon))**

In this example, I will use an installation compatible with macOS Apple Silicon (M-Series):

1. Open a web browser and visit the [Google Cloud SDK installation](https://cloud.google.com/sdk/docs/install) page.
2. Look for the download link for the **macOS ARM (Apple Silicon)** package. It will typically have a name like google-cloud-cli-darwin-arm.tar.gz.
3. Extract the Archive and move the folder ![A black text on a white background

   AI-generated content may be incorrect.](data:image/png;base64...) to your home directly. On macOS, your home directory is usually located at: /Users/your\_username
4. Open Terminal and navigate to the extracted folder:

cd ~/google-cloud-sdk

1. **Run the Install Script:**

./install.sh

1. The script will start in interactive mode. It will ask if you want to update your profile to include the Cloud SDK paths, and it may prompt to install Python 3.12 and recommended modules.

![](data:image/png;base64...)

In this example, I will press **N** or **Enter** to proceed.

![](data:image/png;base64...)

Then, press **Y** to modify the path and just press **Enter** to proceed in installing in default recommended location.

1. Once the installation is completed, restart the terminal and verify installation:

In the **Terminal**, run:

gcloud --version

This should display the version information for the Google Cloud SDK, confirming that the installation was successful. If you encounter command not found error, close and relaunch the terminal and run gloud –version again.

1. Then, Initialize and Log In by running:

gcloud init

You will then be asked to sign in using your Deakin email. Follow the prompts to authenticate your Google account and configure your default project.

1. Sign in to Google using University issued email address:

Press **Y** and **Enter** to continue signing in.

![](data:image/png;base64...)

1. Then, select your Project ID assigned by the Deakin’s IT Administrator. In this example, I will select **[2]** and then I will press **Enter**.

![](data:image/png;base64...)

1. You will be asked to configure a default Compute Region and Zone. You can press **N**, then **Enter**.
2. Once these steps are complete, you’ll have the Google Cloud CLI fully installed and ready for use on your macOS system.

![](data:image/png;base64...)

**Step 3: Create a Private Container Registry on Google Cloud**

In the **Google Cloud Console**:

* 1. Go to **Artifact Registry**
  2. When accessing the Artifact Registry service for the first time, you will also need to click on the button to **Enable** to enable Artifact Registry API.
  3. Click **Create Repository**
  4. Enter repository name.
  5. **Format**: Docker
  6. **Location Type**: Region
     1. **Region**: australia-southeast1 (Sydney)
  7. Click **Create**

This will serve as the private Docker image storage.

For more information, visit **GCP Artifact Registry** via <https://deakin365.sharepoint.com/sites/SITCloudGuide/SitePages/GCP-Artifact-Registry.aspx>

**Step 4: Authenticate Docker with Google Cloud**

1. Open Your Terminal. Make sure you're still in your terminal where you ran the gcloud init command.
2. Execute the following command to configure Docker:

gcloud auth configure-docker australia-southeast1-docker.pkg.dev

This command updates your Docker configuration so that Docker can use your Google Cloud credentials to push and pull images from your Artifact Registry.

1. Press **Y** and press **Enter** to continue.

![](data:image/png;base64...)

**Step 5: Tag the Docker Image for Publication**

Tag your Docker image for Google Artifact Registry

docker tag sit737hirebuddy australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest

* + - * + YOUR\_PROJECT\_ID: your actual GCP project ID
        + YOUR\_REPOSITORY\_NAME: the name of your Artifact Registry repository

**Step 6: Push the Image to Google Artifact Registry**

Upload the image to Artifact Registry:

**Push the tagged image to Artifact Registry**

docker push australia-southeast1-docker.pkg.dev/YOUR\_PROJECT\_ID/YOUR\_REPOSITORY\_NAME/sit737hirebuddy:latest

You should see progress as Docker uploads layers to the private registry.

![A screenshot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

**Step 7: Verify the Published Image by Running It**

Once the Docker image has been successfully pushed to Google Artifact Registry, you can use the docker pull command to retrieve the image from the cloud. This confirms that the image is publicly accessible (within your project) and ready to be deployed or tested.

To ensure the image works as expected. Run:

docker pull australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest

After pulling the image from Artifact Registry, you can run it using docker run. This command starts the container, maps the internal application port to your local machine, and loads environment variables from your .env file. This step verifies that the containerised microservice works correctly when deployed from a remote registry.

docker run -p 7017:7017 --env-file .env \

australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest

The app should be accessible at <http://localhost:7017>.

![A screen shot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

**![A black screen with white text

AI-generated content may be incorrect.](data:image/png;base64...)**

This screenshot confirms that you have successfully created and/or used a Docker repository named “hirebuddy” in your Google Cloud project, and at least one container image has been pushed there.

![A screenshot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

![A screenshot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

This view in the Artifact Registry console gives you a complete overview of every Docker image version you’ve pushed, helping you manage and track your container images for the “hirebuddy” service.

![A screenshot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

![](data:image/png;base64...)

| **Summary** |
| --- |

In this task, the **HireBuddy** microservice was successfully containerised and published to Google Artifact Registry. The process involved setting up a secure development and deployment environment, building the application into a Docker image, and using Google Cloud tools to authenticate, tag, push, and verify the image.

We have completed the full containerisation and cloud deployment workflow for the HireBuddy microservice as part of SIT737 Task 5.2D. This task demonstrated practical skills in using Docker and Google Cloud Platform to prepare, package, publish, and validate a microservice within a cloud-native environment.

* **Setup of a Google Cloud Account**
* **Download and installation of Google Cloud SDK**
* **Creation of a private container registry on Google Cloud**
* **Authentication of Docker with Google Cloud**
* **Tagging the Docker image for publication**
* **Pushing the Docker image to Google Artifact Registry**
* **Verifying the published image by pulling and running it from Artifact Registry**

**GitHub Repository:** Publicly accessible repository named:

* Weekly Task Submissions: [sit737-2025-prac5p](https://github.com/seffy/sit737-2025-prac5p)
* Microservice: [sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)

***References:***

* *Deakin University 2025, GCP Artifact Registry, Deakin Cloud Guide, viewed 5 April 2025,* [*https://deakin365.sharepoint.com/sites/SITCloudGuide/SitePages/GCP-Artifact-Registry.aspx*](https://deakin365.sharepoint.com/sites/SITCloudGuide/SitePages/GCP-Artifact-Registry.aspx)*.*
* *Deakin University 2025, Getting Started with GCP, Deakin Cloud Guide, viewed 5 April 2025,* [*https://deakin365.sharepoint.com/sites/SITCloudGuide/SitePages/Getting-Started-with-GCP.aspx*](https://deakin365.sharepoint.com/sites/SITCloudGuide/SitePages/Getting-Started-with-GCP.aspx)*.*
* *Google Cloud 2024, Artifact Registry documentation, Google Cloud Docs, viewed 5 April 2025,* [*https://cloud.google.com/artifact-registry/docs*](https://cloud.google.com/artifact-registry/docs)*.*
* *Google Cloud 2024, Installing the Cloud SDK, Google Cloud Docs, viewed 5 April 2025,* [*https://cloud.google.com/sdk/docs/install-sdk*](https://cloud.google.com/sdk/docs/install-sdk)*.*
* *Wright, J 2017, Docker Compose in 12 minutes, YouTube video, 12 June, viewed 5 April 2025, https://www.youtube.com/watch?v=Qw9zlE3t8Ko*
* *Web Dev Simplified 2022, Docker in 100 Seconds, YouTube video, 9 March, viewed 5 April 2025, https://www.youtube.com/watch?v=gAkwW2tuIqE*
* *OpenAI (2025) ChatGPT: AI-powered troubleshooting [AI Model]. Available at: https://chat.openai.com/ [Accessed 5 April 2025].*
* *Docker Inc. (2023) Docker Documentation: Healthcheck. Available at: https://docs.docker.com/engine/reference/builder/#healthcheck (Accessed: 5 April 2025).*

\*\*\* End of the document \*\*\*

