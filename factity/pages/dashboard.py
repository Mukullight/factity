import reflex as rx
#import whisper
#import datetime
#import subprocess
#import torch
#from pyannote.audio import Audio
#from pyannote.audio.pipelines.speaker_verification import PretrainedSpeakerEmbedding
#from pyannote.core import Segment
#import wave
#import contextlib
#from sklearn.cluster import AgglomerativeClustering
#import numpy as np


#class State(rx.State):
#    """The app state."""
#    audio_file: str = ""
#    transcript: str = ""
#
#    @rx.event
#    async def handle_upload_and_transcribe(self, files: list[rx.UploadFile]):
#        """Handle the upload and transcription of WAV file."""
#        if not files:
#            print("No files uploaded.")
#            return
#
#        # Get the uploaded file
#        file = files[0]
#        upload_data = await file.read()
#        outfile = rx.get_upload_dir() / file.filename
#
#        # Save the WAV file
#        with outfile.open("wb") as file_object:
#            file_object.write(upload_data)
#
#        self.audio_file = str(outfile)
#
#        try:
#            await self.transcribe_audio()
#        except Exception as e:
#            print(f"An error occurred during transcription: {e}")
#
#    async def transcribe_audio(self):
#        """Transcribe the uploaded audio file."""
#        model_size = "base"
#        model = whisper.load_model(model_size, device="cuda")
#        embedding_model = PretrainedSpeakerEmbedding(
#            "speechbrain/spkrec-ecapa-voxceleb",
#            device=torch.device("cuda")
#        )
#
#        # Function to convert path to .wav if necessary
#        def ensure_wav(path):
#            if path[-3:] != 'wav':
#                subprocess.run(['ffmpeg', '-i', path, 'audio.wav', '-y'])
#                return 'audio.wav'
#            return path
#
#        # Path to your audio file
#        path = self.audio_file
#
#        # Convert to .wav if necessary
#        path = ensure_wav(path)
#
#        # Transcribe the audio
#        result = model.transcribe(path)
#        segments = result["segments"]
#
#        # Get audio duration
#        with contextlib.closing(wave.open(path, 'r')) as f:
#            frames = f.getnframes()
#            rate = f.getframerate()
#            duration = frames / float(rate)
#
#        audio = Audio()
#
#        def segment_embedding(segment):
#            start = segment["start"]
#            end = min(duration, segment["end"])  # Whisper might overshoot the end timestamp
#            clip = Segment(start, end)
#            waveform, sample_rate = audio.crop(path, clip)
#
#            # Convert waveform to mono by averaging channels
#            waveform = waveform.mean(axis=0, keepdims=True) if waveform.shape[0] > 1 else waveform
#            return embedding_model(waveform[None])
#
#        # Generate embeddings for each segment
#        embeddings = np.zeros(shape=(len(segments), 192))
#        for i, segment in enumerate(segments):
#            embeddings[i] = segment_embedding(segment)
#
#        # Handle potential NaNs in embeddings
#        embeddings = np.nan_to_num(embeddings)
#
#        # Number of speakers to cluster into
#        num_speakers = 2  # Adjust based on your audio content
#        clustering = AgglomerativeClustering(num_speakers).fit(embeddings)
#        labels = clustering.labels_
#
#        # Assign speaker labels to segments
#        for i, segment in enumerate(segments):
#            segment["speaker"] = f'SPEAKER {labels[i] + 1}'
#
#        # Helper function for formatting time
#        def format_time(secs):
#            return str(datetime.timedelta(seconds=round(secs)))
#
#        # Create the transcript as a string
#        transcript = ""
#        for i, segment in enumerate(segments):
#            if i == 0 or segments[i - 1]["speaker"] != segment["speaker"]:
#                transcript += f"\n{segment['speaker']} {format_time(segment['start'])}\n"
#            transcript += segment["text"][1:] + ' '
#
#        self.transcript = transcript
#        print("Transcription completed:")
#        print(transcript)

def dashboard_component() -> rx.Component:
    """Dashboard component for the app."""
    return rx.vstack(
        rx.text("hello there"),
        trigger=rx.button(
            rx.icon("plus", size=26),
            rx.text("Upload Audio", size="4"),
        ),)
#        content=rx.dialog(
#            title="Upload WAV File",
#            description="Upload a WAV file to convert to text",
#            body=rx.vstack(
#                rx.upload(
#                    rx.vstack(
#                        rx.button(
#                            "Select WAV File",
#                            color="rgb(107,99,246)",
#                            bg="white",
#                            border="1px solid rgb(107,99,246)",
#                        ),
#                        rx.text("Drag and drop WAV file here or click to select"),
#                    ),
#                    id="wav_upload",
#                    max_files=1,
#                    accept={"audio/wav": [".wav"]},
#                ),
#                rx.text(rx.selected_files("wav_upload")),
#                rx.flex(
#                    rx.button(
#                        "Convert to Text",
#                        color_scheme="blue",
#                        on_click=lambda: State.handle_upload_and_transcribe(rx.upload_files(upload_id="wav_upload")),
#                    ),
#                    spacing="3",
#                    justify="end",
#                ),
#                spacing="4",
#            ),
#            max_width="450px",
#        ),
#    )



