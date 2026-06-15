# CTTC Geodata Explorer

Interactive geospatial visualization platform developed at the **Centre Tecnològic de Telecomunicacions de Catalunya (CTTC)** for the exploration, visualization, and analysis of environmental and remote sensing datasets.

The platform integrates dynamic geospatial services published through **GeoServer** with a modern web-based interface built using **OpenLayers** and **Vite**.

---

# Overview

CTTC Geodata Explorer is designed to provide researchers, technicians, and external users with an intuitive environment for:

- Exploring geospatial datasets
- Comparing temporal information
- Accessing metadata and dataset documentation
- Performing basic spatial analysis
- Connecting external GIS software through WMS/WFS endpoints

The viewer currently supports datasets related to:

- Air Quality Monitoring
- Rice Monitoring & Agricultural Analysis
- Satellite Remote Sensing Products

---

# Main Features

## Dynamic Data Gallery

Interactive catalog panel with hierarchical dataset organization:

- Dataset
- Categories
- Layers

Includes:

- Layer activation and deactivation
- Metadata access
- Dataset information panels
- Temporal layer support
- Dynamic legends

---

## Temporal Slider

Support for temporal datasets with synchronized time navigation.

Features include:

- Dynamic temporal ranges
- Automatic layer synchronization
- Full-date or year-only display modes
- Multi-layer temporal compatibility

---

## Draw & Clipping Tools

Integrated geometry tools for map interaction and visual analysis.

Current tools:

- Point drawing
- Line drawing
- Polygon drawing
- Layer clipping
- Geometry cleaning/reset

---

## Dataset Information Panels

Dedicated informational panels for each dataset including:

- Project descriptions
- Organisations
- Funding information
- Publications
- Institutional logos

---

## Metadata Viewer

Layer-level metadata access through interactive popups.

Includes:

- Layer descriptions
- Data source information
- Technical metadata
- Additional contextual information

---

## GetFeatureInfo Integration

Interactive attribute querying for vector datasets.

Features:

- Dynamic popup generation
- Attribute visualization
- Automatic empty-query filtering

---

## Endpoint Access

Integrated WMS/WFS access panel allowing datasets to be directly connected from external GIS software such as:

- QGIS
- ArcGIS
- GeoServer clients

Available services:

- WMS GetCapabilities
- WFS GetCapabilities

---

## Interactive Tutorial

Built-in onboarding system including:

- Quick Tour
- Contextual explanations
- Animated demonstrations
- Interactive guidance

---

# Technologies Used

| Technology | Purpose |
|---|---|
| OpenLayers | Web mapping framework |
| GeoServer | Geospatial server |
| Vite | Frontend development environment |
| JavaScript | Application logic |
| HTML / CSS | User interface |
| WMS / WFS | Geospatial services |

---

# Project Structure

```text
src/
│
├── controls/          # UI controls and interaction modules
├── map/               # Map creation and layer configuration
├── ui/                # Panels, popups and interface components
├── utils/             # Utility functions
├── assets/            # Fonts, GIFs and static resources
│
public/
│
├── logos/             # Institutional logos
├── icons/             # UI icons
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-repository/cttc-geodata-explorer.git
cd cttc-geodata-explorer
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build Production Version

```bash
npm run build
```

---

# GeoServer Configuration

The application is designed to work with GeoServer services.

Required services:

- WMS
- WFS
- GetFeatureInfo
- GetCapabilities

Datasets should be configured with:

- Proper bounding boxes
- Temporal dimensions (if applicable)
- Styled Layer Descriptors (SLD)
- Enabled WMS querying

---

# Available Datasets

## Air Quality

Environmental and atmospheric monitoring datasets generated from satellite and in-situ observations.

Includes:

- NO₂ products
- AirCrowd datasets
- PM datasets

---

## Rice Monitoring

Remote sensing datasets for agricultural monitoring and crop analysis in the Ebre Delta region.

Includes:

- NDVI / NDWI products
- Yield estimation
- Cultivation analysis

---

# Main Functionalities

## Dynamic Layer Management

The platform supports:

- Dynamic layer loading
- Automatic legend generation
- Temporal synchronization
- Visibility management
- Automatic zoom to layer extent

---

## Dataset Information System

Each dataset can include:

- Description
- Research project information
- Funding details
- Publications
- Institutional references
- Logos and acknowledgements

---

## Interactive Visualization

The viewer supports:

- Temporal exploration
- Feature querying
- Geometric annotations
- Layer clipping
- Multi-layer comparison

---

# Screenshots

## Main Viewer

> Add screenshot here

---

## Dataset Information Panel

> Add screenshot here

---

## Draw Tools

> Add screenshot here

---

## Tutorial System

> Add screenshot here

---

# Future Improvements

Planned future developments include:

- Advanced spatial analysis tools
- User-uploaded layers
- Statistical dashboards
- Time-series charts
- Mobile optimization
- Authentication system
- Export functionalities
- Dynamic charts and analytics

---

# Authors

Developed by:

**David [Surname]**  
Geoinformation & Geomatics Engineering  
Centre Tecnològic de Telecomunicacions de Catalunya (CTTC)

---

# Acknowledgements

This project has been developed within the framework of CTTC research initiatives and public-funded environmental and remote sensing projects.

Special thanks to:

- CTTC
- Collaborating research groups
- Public institutions and funding organisations
