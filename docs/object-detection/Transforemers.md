# Transformers

## The Shift to Vision Transformers (ViTs)

The introduction of the Vision Transformer (ViT) by Dosovitskiy et al. revolutionized computer vision by
demonstrating that the Self-Attention mechanisms originally built for Natural Language Processing could
completely replace convolutional layers (Park & Kim, 2022). Rather than using local, sliding-window
convolutions, ViTs break an image down into an array of non-overlapping patches, flatten them into dense
vector tokens, inject spatial positional encodings, and pass them through standard Transformer encoder
blocks.

### Inductive Bias vs. Global Context

The fundamental structural differences between Convolutional Neural Networks (CNNs) and Vision
Transformers can be broken down into three core elements:

> - **Locality and Translation Equivariance:** CNNs possess a strong, built-in inductive bias. They naturally
assume that pixels close to one another are highly related, and that features are invariant to translation
across the spatial canvas. Transformers possess no such intrinsic bias; they must learn the spatial
relationships of the tokens completely from scratch.
> - **Fourier Analysis of Features:** Empirical studies using Fourier analysis reveal that Multi-Head Self-
Attention (MSA) mechanisms act primarily as spatial low-pass filters, smoothing feature representations
and capturing holistic, global context (Park & Kim, 2022). In contrast, standard convolutional layers
function as high-pass filters, capturing sharp, high-frequency localized details like borders and textures
(Park & Kim, 2022).
> - **Loss Landscape Properties:** Due to their flexible, data-specific kernels, MSAs flatten the optimization
loss landscape, which significantly boosts generalization and robustness against image corruptions or
missing blocks (Park & Kim, 2022). However, in small-data regimes, this lack of structural bias can lead to
highly non-convex loss surfaces that are difficult to optimize without massive pre-training datasets or
specialized smoothing techniques (Park & Kim, 2022).

## Transformer Architectures for Object Detection

The paradigm shift to fully end-to-end transformer-based object detection was catalyzed by Facebook AI's
introduction of **DETR (DEtection TRansformer)** (Shehzadi et al., 2023). DETR entirely reimagines object detection as a direct set prediction problem, elegantly bypassing the need for hand-crafted anchor
components or manual NMS operations (Shehzadi et al., 2023).

### The DETR Set Prediction Pipeline

A standard DETR architecture operates via an integrated four-part execution flow:

## Hugging Face Transformers