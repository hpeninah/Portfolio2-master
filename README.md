# Hannah Mulato Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

The site highlights my work across software engineering, bioinformatics, computational biology, scientific computing, and data-focused projects.

## Live Site

(https://hpeninah.github.io/Portfolio2-master/)

## Featured Projects

### HPC Genomics Pipeline

A reproducible genomic analysis workflow for processing sequencing data from FASTQ through alignment, variant calling, annotation, and downstream analysis.

**Technologies:** Python, Snakemake, SLURM, Bash, BWA, GATK, VEP

### GeneInsight

A full-stack bioinformatics research platform combining gene, protein, literature, structural biology, and CRISPR information into a single interface.

**Technologies:** Python, FastAPI, React, Vite, UniProt, PubMed, AlphaFold

### Computational Systems Biology Models

A collection of computational biology models exploring viral dynamics, cancer biology, circadian rhythms, and microbial competition through simulation and optimization.

**Technologies:** COPASI, ODE Modeling, Simulation, Parameter Scans, Optimization

## Tech Stack

* React
* TypeScript
* Vite
* HTML
* CSS
* Formspree

## Features

* Responsive layout for desktop and mobile
* Light and dark themes
* Theme preference saved locally
* Automatic system theme detection
* Reusable React components
* TypeScript-based project and skills data
* Resume access
* Contact form
* Links to GitHub, LinkedIn, and live projects

## Project Structure

```text
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
│
├── data/
│   ├── projects.ts
│   └── skills.ts
│
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/hpeninah/Portfolio2.git
```

Move into the project directory:

```bash
cd Portfolio2
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Building for Production

```bash
npm run build
```

The production build will be generated in the `dist` directory.

## About Me

I'm a software engineer with a B.S. in Bioinformatics and Computational Biology. My interests span software engineering, bioinformatics, scientific computing, data engineering, and computational biology.

## Connect

* GitHub: https://github.com/hpeninah
* LinkedIn: https://www.linkedin.com/in/hannah-mulato-62487173/
