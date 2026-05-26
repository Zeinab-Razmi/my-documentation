# Image segmentation 
Image segmentation is a fundamental task in computer vision that involves dividing an image into distinct and meaningful regions or segments. The goal of image segmentation is to simplify and represent an image in a more understandable and analyzable manner, by separating different objects, regions, or structures within the image. This process is crucial for various applications, including object recognition, scene understanding, medical imaging, robotics, and more.

## Types of image segmentation:

**1. Semantic Segmentation:**  Assigns a class label to every pixel, can not distinguish between instances of the same class (e.g., All the birds belong to the same class).

**2. Instance Segmentation:** Distinguishes different instances of the same class, each object of the same class gets a separate label (e.g., Each bird has a different label).

**3. Panoptic Segmentation:** Combines both semantic and instance segmentation for the most comprehensive scene understanding (e.g., Each bird has its own label, but they are all identified as a “bird”).

![Screenshot 2026-05-22 at 20.24.58.png](../Screenshot%202026-05-22%20at%2020.24.58.png)

## Traditional Mathematical Paradigms

Traditional segmentation approaches rely on mathematical formulations and structural patterns rather than trained neural weights. They are computationally lightweight, deterministic, and require zero training data.

## Deep Learning Architectures

> **1. Fully convolutional networks (FCNs)**
>
>A fully convolutional network (FCN) is a state-of-the-art neural network architecture used for semantic segmentation that depends on several connected, convolutional layers. Whereas traditional convolutional neural network (CNN) architecture is made up of convolutional layers and flat layers that output single labels, FCN models replace some of those flat layers with 1:1 convolutional blocks that can further extract more information about the image. Avoiding the use of flat, denser layers in favor of convolution, pooling or upsampling layers makes FCN networks easier to train.
>
>- **Upsampling and downsampling:** As the network gathers more convolutional layers, the image size is reduced, resulting in less spatial information as well as pixel-level information, a necessary process known as downsampling. At the very end of this process, data engineers perform image optimization by expanding, or upsampling, the feature map that’s been created back to the shape of the input image.
>
>- **Max-pooling:** Max-pooling is another critical tool in the process of extracting information from regions of an image and analyzing them. Max-pooling chooses the greatest element in a region being analyzed so its output can result in a feature map containing the most prominent features from the previous feature map.

> **2. U-Nets**
> 
> The U-Net architecture is a modification of the original FCN architecture that was introduced in 2015 and consistently achieves better results. It consists of two parts, an encoder and a decoder. While the encoder stacks convolutional layers that are consistently downsampling the image to extract information from it, the decoder rebuilds the image features using the process of deconvolution. U-net architecture is primarily used in the medical field to identify cancerous and non-cancerous tumors in the lungs and brain.
>- **Skip-connections:** An important innovation introduced to FCNs by U-Net is known as skip-connections, used to connect the output of one convolutional layer to another that is non-adjacent. This skip-connections process reduces data loss during downsampling, enable higher-resolution output. Each convolutional layer is independently upsampled and combined with features from other layers until the final output accurately represents the image being analyzed.

> **3. DeepLab**
> 
> The DeepLab semantic segmentation model was developed by Google in 2015 to further improve on the architecture of the original FCN and deliver even more precise results. While the stacks of layers in an FCN model reduce image resolution significantly, DeepLab’s architecture uses a process called atrous convolution to upsample the data. With the atrous convolution process, convolution kernels can remove information from an image and leave gaps between the kernel parameters.
>
>DeepLab’s approach to dilated convolution pulls data out of the larger field of view while still maintaining the same resolution. The feature space is then pulled through a fully connected conditional random field algorithm (CRF) so more detail can be captured and utilized for pixel-wise loss function, resulting in a clearer, more accurate segmentation mask.

> **4. Pyramid Scene Parsing Network (PSPNet)**
> 
> In 2017, a new segmentation algorithm for image segmentation was introduced. PSPNet deploys a pyramid parsing module that gathers contextual image datasets at a higher accuracy rate than its predecessors. Like its predecessors, the PSPNet architecture employs the encoder-decoder approach, but where DeepLab applied upscaling to make its pixel-level calculations, PSPNet adds a new pyramid pooling layer to achieve its results. PSPNet’s multi-scale pooling allows it to analyze a wider window of image information than other models.
> 
## Semantic Segmentation

Semantic segmentation is a process in computer vision that focuses on assigning a class label to every pixel in an image. This process transforms simple images into meaningful data maps, enabling machines to understand and interpret complex visual scenes as humans do. It is an end-to-end image analysis process that divides a digital image into multiple segments and classifies the information contained in each region.

### Workflow of Semantic Segmentation

**Data Collection and Annotation:** Gather and label large datasets with pixel-wise annotations for classes of interest.

**Model Selection:** Choose an appropriate deep learning architecture (often a variant of a Convolutional Neural Network).

**Training:** The model learns to associate image features to pixel classes using annotated data.

**Inference:** Given a new input image, the trained model predicts class probabilities for every pixel.

**Post-Processing:** Refine segmentation masks for performance or visual clarity.

