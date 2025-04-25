const enzymes = [
  {
    question: "What is the function of amylase?",
    correct: "Breaks down starch into maltose",
    options: ["Breaks down proteins", "Breaks down lipids", "Breaks down starch into maltose", "Synthesizes DNA"]
  },
  {
    question: "What is the effect of high temperature on enzyme activity?",
    correct: "It denatures the enzyme",
    options: ["It increases activity indefinitely", "It denatures the enzyme", "It makes the enzyme more specific", "It has no effect"]
  },
  {
    question: "What type of molecule are enzymes?",
    correct: "Proteins",
    options: ["Lipids", "Carbohydrates", "Proteins", "Nucleic acids"]
  },
  {
    question: "What is the name of the region on an enzyme where the substrate binds?",
    correct: "Active site",
    options: ["Binding zone", "Reaction groove", "Active site", "Catalytic spot"]
  },
  {
    question: "What is the term for the energy required to start a chemical reaction?",
    correct: "Activation energy",
    options: ["Potential energy", "Reaction energy", "Activation energy", "Initiation energy"]
  },
  {
    question: "Which model describes enzymes changing shape to fit a substrate?",
    correct: "Induced fit model",
    options: ["Lock and key model", "Fluid mosaic model", "Induced fit model", "Sliding fit model"]
  },
  {
    question: "What is a competitive inhibitor?",
    correct: "Molecule that binds to the active site",
    options: ["Molecule that denatures the enzyme", "Molecule that binds elsewhere", "Molecule that binds to the active site", "A coenzyme"]
  },
  {
    question: "Which enzyme breaks down hydrogen peroxide?",
    correct: "Catalase",
    options: ["Lipase", "Amylase", "Catalase", "Pepsin"]
  },
  {
    question: "What is a cofactor?",
    correct: "A non-protein helper of enzyme activity",
    options: ["A protein that activates enzymes", "A substrate mimic", "A non-protein helper of enzyme activity", "A denatured enzyme"]
  },
  {
    question: "What is a prosthetic group?",
    correct: "Permanently attached cofactor",
    options: ["Temporary inhibitor", "Enzyme-substrate complex", "Permanently attached cofactor", "Organic catalyst"]
  }
  {
    question: "What is the optimum pH for pepsin activity?",
    correct: "pH 2",
    options: ["pH 2", "pH 7", "pH 9", "pH 12"]
  },
  {
    question: "Which enzyme works best in alkaline conditions in the small intestine?",
    correct: "Trypsin",
    options: ["Pepsin", "Trypsin", "Amylase", "Catalase"]
  },
  {
    question: "What happens to enzymes at very high temperatures?",
    correct: "They denature",
    options: ["They work faster", "They denature", "They replicate", "They freeze"]
  },
  {
    question: "What is an enzyme-substrate complex?",
    correct: "Temporary binding of substrate to enzyme",
    options: ["Enzyme joined to cofactor", "Temporary binding of substrate to enzyme", "Enzyme-product complex", "Inactive enzyme"]
  },
  {
    question: "What kind of enzyme acts within the cell that produces it?",
    correct: "Intracellular enzyme",
    options: ["Extracellular enzyme", "Induced enzyme", "Synthetic enzyme", "Intracellular enzyme"]
  },
  {
    question: "Which factor directly affects the rate of enzyme activity?",
    correct: "Temperature",
    options: ["Enzyme size", "pH", "Enzyme colour", "Temperature"]
  },
  {
    question: "What is the term for the shape of an enzyme being altered permanently?",
    correct: "Denaturation",
    options: ["Denaturation", "Saturation", "Inhibition", "Polymerisation"]
  },
  {
    question: "What do enzymes do to the activation energy of reactions?",
    correct: "Lower it",
    options: ["Increase it", "Lower it", "Eliminate it", "Equalise it"]
  },
  {
    question: "What is the product when lipase breaks down lipids?",
    correct: "Fatty acids and glycerol",
    options: ["Amino acids", "Glucose and starch", "Fatty acids and glycerol", "Nucleotides"]
  },
  {
    question: "What is a non-competitive inhibitor?",
    correct: "Binds away from the active site and changes enzyme shape",
    options: ["Binds to the active site", "Destroys the enzyme", "Binds away from the active site and changes enzyme shape", "Boosts reaction speed"]
  },
  {
    question: "What does enzyme specificity mean?",
    correct: "Enzyme works on one specific substrate",
    options: ["Enzyme reacts with all substrates", "Enzyme activates in acid", "Enzyme works on one specific substrate", "Enzyme digests all molecules"]
  },
  {
    question: "What is the result of substrate concentration being too low?",
    correct: "Rate of reaction decreases",
    options: ["Reaction speeds up", "More enzyme is made", "Rate of reaction decreases", "Nothing changes"]
  },
  {
    question: "What is a zymogen?",
    correct: "An inactive enzyme precursor",
    options: ["A substrate mimic", "A denatured enzyme", "An inactive enzyme precursor", "A type of inhibitor"]
  },
  {
    question: "How does temperature initially affect enzyme activity?",
    correct: "Increases kinetic energy of molecules",
    options: ["Destroys active sites", "Increases enzyme concentration", "Increases kinetic energy of molecules", "Slows down molecules"]
  },
  {
    question: "Which enzyme breaks down proteins in the stomach?",
    correct: "Pepsin",
    options: ["Lipase", "Amylase", "Pepsin", "Trypsin"]
  },
  {
    question: "What effect does pH have on enzymes?",
    correct: "Affects the shape of the active site",
    options: ["Increases substrate", "Makes enzyme grow", "Affects the shape of the active site", "Increases energy"]
  },
  {
    question: "How does an enzyme affect the equilibrium of a reaction?",
    correct: "It does not affect equilibrium",
    options: ["Shifts equilibrium", "Stops equilibrium", "It does not affect equilibrium", "Destroys equilibrium"]
  },
  {
    question: "What are enzymes used for in DNA replication?",
    correct: "To unzip and copy strands",
    options: ["To break DNA", "To form ATP", "To unzip and copy strands", "To stop mutation"]
  },
  {
    question: "What are extracellular enzymes?",
    correct: "Enzymes that act outside the cell",
    options: ["Enzymes inside mitochondria", "Enzymes inside nucleus", "Enzymes that act outside the cell", "Enzymes in Golgi"]
  },
  {
    question: "Which feature of enzymes makes them reusable?",
    correct: "They are not used up in reactions",
    options: ["They are strong", "They are not used up in reactions", "They replicate", "They bind permanently"]
  },
  {
    question: "What is the role of DNA polymerase?",
    correct: "Joins nucleotides during DNA replication",
    options: ["Breaks proteins", "Joins nucleotides during DNA replication", "Creates glucose", "Binds lipids"]
  },
  {
    question: "Which property makes enzymes act as catalysts?",
    correct: "They lower activation energy",
    options: ["They increase temperature", "They use more energy", "They lower activation energy", "They denature faster"]
  },
  {
    question: "What does saturation point mean in enzyme activity?",
    correct: "All enzyme active sites are occupied",
    options: ["Enzyme has denatured", "All enzyme active sites are occupied", "Substrate is lost", "Enzyme is inactive"]
  },
  {
    question: "Which enzyme breaks down starch in the mouth?",
    correct: "Salivary amylase",
    options: ["Pepsin", "Salivary amylase", "Lipase", "Trypsin"]
  },
  {
    question: "Why do enzymes show a bell-shaped curve with pH?",
    correct: "They work best at an optimum pH",
    options: ["They denature immediately", "They don't change", "They work best at an optimum pH", "They only work in acid"]
  },
  {
    question: "What is an enzyme's turnover number?",
    correct: "Number of substrate molecules converted per unit time",
    options: ["Amount of enzyme used", "Time to react", "Number of substrate molecules converted per unit time", "Rate of denaturation"]
  },
  {
    question: "How do enzymes speed up reactions?",
    correct: "By lowering the activation energy",
    options: ["By increasing substrate size", "By denaturing quickly", "By lowering the activation energy", "By changing pH"]
  },
  {
    question: "What type of reaction do enzymes catalyse?",
    correct: "Metabolic reactions",
    options: ["Combustion", "Metabolic reactions", "Radioactive decay", "Photosynthesis only"]
  },
  {
    question: "Which part of the enzyme changes during denaturation?",
    correct: "Active site",
    options: ["Substrate", "Enzyme name", "Active site", "Nucleus"]
  },
  {
    question: "What is feedback inhibition?",
    correct: "End product of a pathway inhibits an earlier enzyme",
    options: ["End product speeds reaction", "Substrate forms feedback", "Enzyme breaks product", "End product of a pathway inhibits an earlier enzyme"]
  },
  {
    question: "What happens when substrate concentration increases beyond saturation?",
    correct: "Rate levels off",
    options: ["Rate keeps increasing", "Rate drops", "Rate levels off", "Enzyme denatures"]
  },
  {
    question: "Which enzyme breaks down DNA?",
    correct: "DNase",
    options: ["Lipase", "DNase", "Protease", "Pepsin"]
  },
  {
    question: "Which class of enzyme joins molecules together?",
    correct: "Ligase",
    options: ["Isomerase", "Ligase", "Protease", "Lipase"]
  },
  {
    question: "What determines enzyme-substrate compatibility?",
    correct: "Shape of active site and substrate",
    options: ["Size of cell", "pH only", "Shape of active site and substrate", "Type of membrane"]
  },
  {
    question: "Which enzyme digests milk protein in infants?",
    correct: "Rennin",
    options: ["Trypsin", "Lipase", "Rennin", "Pepsin"]
  },
  {
    question: "How are enzymes used in industry?",
    correct: "To speed up reactions at lower temperatures",
    options: ["To kill bacteria", "To slow reactions", "To increase waste", "To speed up reactions at lower temperatures"]
  },
  {
    question: "Which graph best describes enzyme activity vs. temperature?",
    correct: "Bell curve",
    options: ["Flat line", "Bell curve", "Sine wave", "Exponential decay"]
  },
  {
    question: "What does enzyme denaturation do to reaction rate?",
    correct: "Decreases it to zero",
    options: ["Increases it", "Has no effect", "Decreases it to zero", "Reverses the reaction"]
  },
  {
    question: "What are isoenzymes?",
    correct: "Different forms of an enzyme that catalyse the same reaction",
    options: ["Inactive enzymes", "Different enzymes for different cells", "Different forms of an enzyme that catalyse the same reaction", "Multiple substrates"]
  },
  {
    question: "How can enzyme activity be measured?",
    correct: "By rate of product formation",
    options: ["By colour", "By enzyme size", "By rate of product formation", "By light intensity"]
  },
  {
    question: "Which enzyme is used in lactose-free milk production?",
    correct: "Lactase",
    options: ["Maltase", "Lactase", "Sucrase", "Amylase"]
  }
];

export default enzymes;
